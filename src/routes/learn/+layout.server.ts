import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types.js';
import { getLearner } from '$lib/db/queries.js';

export const load: LayoutServerLoad = async ({ cookies }) => {
	if (process.env.PUBLIC_STATIC === 'true') {
		return { learnerId: null };
	}

	const learnerId = cookies.get('wid');
	if (!learnerId) {
		redirect(302, '/');
	}

	// Validate the session still exists — the cookie may outlive the in-process
	// store (server restart) or the DynamoDB TTL. Clear the stale cookie so the
	// learner gets the identity modal again instead of a 500.
	const learner = await getLearner(learnerId);
	if (!learner) {
		cookies.delete('wid', { path: '/' });
		redirect(302, '/');
	}

	return { learnerId };
};
