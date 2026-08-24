import {
	PutCommand,
	GetCommand,
	QueryCommand,
	UpdateCommand
} from '@aws-sdk/lib-dynamodb';
import { getDocClient, TABLE, isDynamoEnabled, isDegraded, degradeIfUnusable } from './client.js';
import { ttlEpoch } from './schema.js';
import {
	localCreateLearner,
	localGetLearner,
	localUpdateLearnerName,
	localUpdateLastSeen,
	localGetLearnersByCohort,
	localRecordStepComplete,
	localGetLearnerProgress,
	localUpsertNote,
	localGetLearnerNotes
} from './local-store.js';

/**
 * True when reads and writes should go to the in-process store instead of
 * DynamoDB — either because persistence was never switched on, or because a
 * DynamoDB call already failed unrecoverably in this process.
 */
function useLocal(): boolean {
	return !isDynamoEnabled() || isDegraded();
}

/**
 * Run a DynamoDB operation, falling back to the local equivalent if the failure
 * is one that will not fix itself. A learner should not see a 500 because a
 * credential is missing; they should see a working exercise and a warning in the
 * server log.
 */
async function withFallback<T>(attempt: () => Promise<T>, fallback: () => T): Promise<T> {
	try {
		return await attempt();
	} catch (err) {
		if (degradeIfUnusable(err)) return fallback();
		throw err;
	}
}

/** As `withFallback`, for writes where the DynamoDB return value is discarded. */
async function writeWithFallback(
	attempt: () => Promise<unknown>,
	fallback: () => void
): Promise<void> {
	try {
		await attempt();
	} catch (err) {
		if (degradeIfUnusable(err)) {
			fallback();
			return;
		}
		throw err;
	}
}

// ─── Key helpers ────────────────────────────────────────────────────────────

function learnerPk(learnerId: string) {
	return `learner#${learnerId}`;
}

function progressSk(moduleId: string, exerciseId: string, stepIndex: number) {
	return `progress#${moduleId}#${exerciseId}#${String(stepIndex).padStart(3, '0')}`;
}

function noteSk(moduleId: string, exerciseId: string) {
	return `note#${moduleId}#${exerciseId}`;
}

// ─── Types ───────────────────────────────────────────────────────────────────

export interface LearnerItem {
	pk: string;
	sk: 'META';
	id: string;
	name: string;
	role: string;
	cohort: string;
	createdAt: string;
	lastSeen: string;
	expiresAt: number;
}

export interface ProgressItem {
	pk: string;
	sk: string;
	learnerId: string;
	moduleId: string;
	exerciseId: string;
	stepIndex: number;
	completedAt: string;
	expiresAt: number;
}

export interface NoteItem {
	pk: string;
	sk: string;
	learnerId: string;
	moduleId: string;
	exerciseId: string;
	body: string;
	createdAt: string;
	updatedAt: string;
	expiresAt: number;
}

// ─── Learner operations ──────────────────────────────────────────────────────

export async function createLearner(opts: {
	id: string;
	name: string;
	role: string;
	cohort: string;
}): Promise<void> {
	if (useLocal()) return localCreateLearner(opts);
	const now = new Date().toISOString();
	const db = getDocClient();
	await writeWithFallback(
		() =>
			db.send(
				new PutCommand({
					TableName: TABLE,
					Item: {
						pk: learnerPk(opts.id),
						sk: 'META',
						id: opts.id,
						name: opts.name,
						role: opts.role,
						cohort: opts.cohort,
						createdAt: now,
						lastSeen: now,
						expiresAt: ttlEpoch()
					} satisfies LearnerItem
				})
			),
		() => localCreateLearner(opts)
	);
}

export async function getLearner(learnerId: string): Promise<LearnerItem | null> {
	if (useLocal()) return localGetLearner(learnerId);
	const db = getDocClient();
	return withFallback(
		async () => {
			const result = await db.send(
				new GetCommand({
					TableName: TABLE,
					Key: { pk: learnerPk(learnerId), sk: 'META' }
				})
			);
			return (result.Item as LearnerItem) ?? null;
		},
		() => localGetLearner(learnerId)
	);
}

export async function updateLearnerName(learnerId: string, name: string): Promise<void> {
	if (useLocal()) return localUpdateLearnerName(learnerId, name);
	const db = getDocClient();
	await writeWithFallback(
		() =>
			db.send(
				new UpdateCommand({
					TableName: TABLE,
					Key: { pk: learnerPk(learnerId), sk: 'META' },
					UpdateExpression: 'SET #name = :name',
					ExpressionAttributeNames: { '#name': 'name' },
					ExpressionAttributeValues: { ':name': name }
				})
			),
		() => localUpdateLearnerName(learnerId, name)
	);
}

export async function updateLastSeen(learnerId: string): Promise<void> {
	if (useLocal()) return localUpdateLastSeen(learnerId);
	const db = getDocClient();
	await writeWithFallback(
		() =>
			db.send(
				new UpdateCommand({
					TableName: TABLE,
					Key: { pk: learnerPk(learnerId), sk: 'META' },
					UpdateExpression: 'SET lastSeen = :ts',
					ExpressionAttributeValues: { ':ts': new Date().toISOString() }
				})
			),
		() => localUpdateLastSeen(learnerId)
	);
}

export async function getLearnersByCohort(cohort: string): Promise<LearnerItem[]> {
	if (useLocal()) return localGetLearnersByCohort(cohort);
	const db = getDocClient();
	return withFallback(
		async () => {
			const result = await db.send(
				new QueryCommand({
					TableName: TABLE,
					IndexName: 'cohort-lastSeen-index',
					KeyConditionExpression: 'cohort = :cohort',
					ExpressionAttributeValues: { ':cohort': cohort },
					ScanIndexForward: false // most recently seen first
				})
			);
			// GSI returns all items including progress/notes if they have cohort attr — filter to META
			return ((result.Items ?? []) as LearnerItem[]).filter((i) => i.sk === 'META');
		},
		() => localGetLearnersByCohort(cohort)
	);
}

// ─── Progress operations ─────────────────────────────────────────────────────

export async function recordStepComplete(opts: {
	learnerId: string;
	moduleId: string;
	exerciseId: string;
	stepIndex: number;
}): Promise<void> {
	if (useLocal()) return localRecordStepComplete(opts);
	const now = new Date().toISOString();
	const db = getDocClient();
	await writeWithFallback(
		() =>
			db.send(
				new PutCommand({
					TableName: TABLE,
					Item: {
						pk: learnerPk(opts.learnerId),
						sk: progressSk(opts.moduleId, opts.exerciseId, opts.stepIndex),
						learnerId: opts.learnerId,
						moduleId: opts.moduleId,
						exerciseId: opts.exerciseId,
						stepIndex: opts.stepIndex,
						completedAt: now,
						expiresAt: ttlEpoch()
					} satisfies ProgressItem
				})
			),
		() => localRecordStepComplete(opts)
	);
}

export async function getLearnerProgress(learnerId: string): Promise<ProgressItem[]> {
	if (useLocal()) return localGetLearnerProgress(learnerId);
	const db = getDocClient();
	return withFallback(
		async () => {
			const result = await db.send(
				new QueryCommand({
					TableName: TABLE,
					KeyConditionExpression: 'pk = :pk AND begins_with(sk, :prefix)',
					ExpressionAttributeValues: {
						':pk': learnerPk(learnerId),
						':prefix': 'progress#'
					}
				})
			);
			return (result.Items ?? []) as ProgressItem[];
		},
		() => localGetLearnerProgress(learnerId)
	);
}

// ─── Notes operations ─────────────────────────────────────────────────────────

export async function upsertNote(opts: {
	learnerId: string;
	moduleId: string;
	exerciseId: string;
	body: string;
}): Promise<void> {
	if (useLocal()) return localUpsertNote(opts);
	const now = new Date().toISOString();
	const db = getDocClient();
	// Use UpdateItem to upsert: set body + updatedAt, preserve createdAt if exists
	await writeWithFallback(
		() =>
			db.send(
				new UpdateCommand({
					TableName: TABLE,
					Key: {
						pk: learnerPk(opts.learnerId),
						sk: noteSk(opts.moduleId, opts.exerciseId)
					},
					UpdateExpression:
						'SET #body = :body, updatedAt = :now, expiresAt = :ttl,' +
						' learnerId = :lid, moduleId = :mid, exerciseId = :eid,' +
						' createdAt = if_not_exists(createdAt, :now)',
					ExpressionAttributeNames: { '#body': 'body' },
					ExpressionAttributeValues: {
						':body': opts.body,
						':now': now,
						':ttl': ttlEpoch(),
						':lid': opts.learnerId,
						':mid': opts.moduleId,
						':eid': opts.exerciseId
					}
				})
			),
		() => localUpsertNote(opts)
	);
}

export async function getLearnerNotes(learnerId: string): Promise<NoteItem[]> {
	if (useLocal()) return localGetLearnerNotes(learnerId);
	const db = getDocClient();
	return withFallback(
		async () => {
			const result = await db.send(
				new QueryCommand({
					TableName: TABLE,
					KeyConditionExpression: 'pk = :pk AND begins_with(sk, :prefix)',
					ExpressionAttributeValues: {
						':pk': learnerPk(learnerId),
						':prefix': 'note#'
					}
				})
			);
			return (result.Items ?? []) as NoteItem[];
		},
		() => localGetLearnerNotes(learnerId)
	);
}
