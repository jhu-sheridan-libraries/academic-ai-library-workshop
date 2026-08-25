import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types.js';
import { deleteLearner } from '$lib/db/queries.js';

export const prerender = false;

export const DELETE: RequestHandler = async ({ params, url }) => {
	const token = url.searchParams.get('token');
	if (!token || token !== process.env.FACILITATOR_TOKEN) {
		return json({ error: 'forbidden' }, { status: 403 });
	}

	const { learnerId } = params;
	await deleteLearner(learnerId);
	return json({ ok: true });
};
