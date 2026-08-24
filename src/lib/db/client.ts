import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { fromTemporaryCredentials, fromNodeProviderChain } from '@aws-sdk/credential-providers';

let _docClient: DynamoDBDocumentClient | null = null;

/**
 * Whether to persist to DynamoDB.
 *
 * Auto-detected, so that both audiences work without configuration gymnastics:
 * a facilitator who has provisioned the table and an AWS profile gets real
 * persistence, and a learner who cloned this to work through the course on their
 * own machine gets the in-process store in `local-store.ts` — no AWS account, no
 * credential, no error.
 *
 * Detection is "is a table named AND is there any credential source to reach it
 * with". Override either way with `WORKSHOP_PERSISTENCE=dynamodb` or `=local`.
 *
 * A static build never persists: there is no server to persist from.
 */
export function isDynamoEnabled(): boolean {
	if (process.env.PUBLIC_STATIC === 'true') return false;

	const explicit = process.env.WORKSHOP_PERSISTENCE;
	if (explicit === 'local') return false;
	if (explicit === 'dynamodb') return true;

	const hasTable = Boolean(process.env.DYNAMODB_TABLE);
	const hasCredentialSource = Boolean(
		process.env.AWS_PROFILE ||
			process.env.AWS_ROLE_ARN ||
			process.env.AWS_ACCESS_KEY_ID ||
			process.env.AWS_WEB_IDENTITY_TOKEN_FILE ||
			process.env.AWS_CONTAINER_CREDENTIALS_RELATIVE_URI ||
			process.env.AWS_CONTAINER_CREDENTIALS_FULL_URI
	);
	return hasTable && hasCredentialSource;
}

/**
 * Set once if a DynamoDB call fails in a way that will keep failing — missing or
 * invalid credentials, no such table. Flips the process to the local store rather
 * than returning a 500 to a learner who only wanted to start an exercise.
 */
let _degraded = false;
let _degradedReason: string | null = null;

export function isDegraded(): boolean {
	return _degraded;
}

/**
 * What the facilitator dashboard needs to know: is it showing real data.
 *
 * If persistence was expected but has degraded, the dashboard must say so
 * loudly. An empty cohort table looks identical whether nobody has started or
 * the table name is wrong, and quietly showing the second as the first is how a
 * facilitator ends up believing a session failed.
 */
export function persistenceStatus(): {
	expected: boolean;
	degraded: boolean;
	reason: string | null;
} {
	return {
		expected: isDynamoEnabled(),
		degraded: _degraded,
		reason: _degradedReason
	};
}

/** True if the error means "stop trying DynamoDB", rather than a transient fault. */
export function degradeIfUnusable(err: unknown): boolean {
	const name = (err as { name?: string })?.name ?? '';
	const message = (err as { message?: string })?.message ?? '';
	const fatal =
		name === 'CredentialsProviderError' ||
		name === 'ResourceNotFoundException' ||
		name === 'UnrecognizedClientException' ||
		name === 'AccessDeniedException' ||
		name === 'InvalidSignatureException' ||
		/Could not load credentials|security token|not authorized/i.test(message);

	if (fatal && !_degraded) {
		_degraded = true;
		_degradedReason = name || message || 'unknown error';
		console.warn(
			`[workshop] DynamoDB is unavailable (${name || 'unknown error'}). ` +
				'Falling back to in-process storage for the rest of this run. ' +
				'Progress will not survive a restart and the facilitator dashboard ' +
				'will only show learners from this process. ' +
				'See docs/DEPLOYMENT.md to configure persistence.'
		);
	}
	return fatal;
}

export function getDocClient(): DynamoDBDocumentClient {
	if (!_docClient) {
		const region = process.env.AWS_REGION ?? 'us-east-1';
		const roleArn = process.env.AWS_ROLE_ARN;

		// Resolve credentials from the standard chain — instance profile, ECS task
		// role, SSO, or a named `~/.aws/credentials` profile. Passing `profile`
		// explicitly matters: it honours AWS_PROFILE even when the ambient chain
		// would not pick it up, which is the common case for a facilitator running
		// the built server locally against a named profile.
		const baseCredentials = fromNodeProviderChain({
			profile: process.env.AWS_PROFILE
		});

		const raw = new DynamoDBClient({
			region,
			// If AWS_ROLE_ARN is set, assume that role via STS using the chain above
			// as the master credentials. Otherwise use the chain directly. No static
			// access keys are used or expected in either path.
			credentials: roleArn
				? fromTemporaryCredentials({
						masterCredentials: baseCredentials,
						params: {
							RoleArn: roleArn,
							RoleSessionName: process.env.AWS_ROLE_SESSION_NAME ?? 'library-workshop-session',
							DurationSeconds: 3600
						}
					})
				: baseCredentials
		});

		_docClient = DynamoDBDocumentClient.from(raw, {
			marshallOptions: { removeUndefinedValues: true }
		});
	}
	return _docClient;
}

export const TABLE = process.env.DYNAMODB_TABLE ?? 'LibraryWorkshop';
