import type { Handle } from '@sveltejs/kit';
import { getLearner, updateLastSeen } from '$lib/db/queries.js';

export const handle: Handle = async ({ event, resolve }) => {
	const learnerId = event.cookies.get('wid');
	if (learnerId) {
		// Validate the session still exists — the cookie may outlive the
		// in-process store (server restart) or a DynamoDB TTL expiry. Clearing
		// the stale cookie once here means downstream loaders never see an
		// orphaned session ID.
		const learner = await getLearner(learnerId);
		if (!learner) {
			event.cookies.delete('wid', { path: '/' });
		} else {
			// Best-effort update — don't block the request if DynamoDB is unavailable
			updateLastSeen(learnerId).catch(() => {});
		}
	}
	return resolve(event);
};
