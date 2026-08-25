import type { RequestHandler } from './$types.js';
import {
	getLearnerNotes,
	getLearnerProgress,
	getLearnersByCohort,
	type NoteItem,
	type ProgressItem
} from '$lib/db/queries.js';
import { persistenceStatus } from '$lib/db/client.js';
import { loadAllModules } from '$lib/content/loader.js';

export const prerender = false;

function asInlineText(value: string): string {
	return value.replace(/[\r\n]+/g, ' ').replace(/\|/g, '\\|').trim();
}

function asIndentedBlock(value: string): string {
	return value
		.replace(/\r\n/g, '\n')
		.split('\n')
		.map((line) => `    ${line}`)
		.join('\n');
}

export const GET: RequestHandler = async ({ request }) => {
	const token = request.headers.get('x-facilitator-token');
	if (!token || token !== process.env.FACILITATOR_TOKEN) {
		return new Response(JSON.stringify({ error: 'forbidden' }), {
			status: 403,
			headers: { 'content-type': 'application/json' }
		});
	}

	const cohort = process.env.PUBLIC_COHORT ?? 'default';
	const modules = loadAllModules();
	const moduleById = new Map(modules.map((module) => [module.id, module]));
	const totalCatalogSteps = modules.reduce(
		(total, module) =>
			total + module.exercises.reduce((moduleTotal, exercise) => moduleTotal + (exercise.step_count ?? 0), 0),
		0
	);

	const learners = await getLearnersByCohort(cohort);
	const learnerRecords = await Promise.all(
		learners.map(async (learner) => {
			const [steps, notes] = await Promise.all([
				getLearnerProgress(learner.id),
				getLearnerNotes(learner.id)
			]);
			return { learner, steps, notes };
		})
	);

	const exerciseLabel = (moduleId: string, exerciseId: string): string => {
		const module = moduleById.get(moduleId);
		const exercise = module?.exercises.find((item) => item.id === exerciseId);
		return `${module?.title ?? moduleId} / ${exercise?.title ?? exerciseId}`;
	};
	const sortByCompletedAt = (a: ProgressItem, b: ProgressItem) =>
		a.completedAt.localeCompare(b.completedAt);
	const sortByUpdatedAt = (a: NoteItem, b: NoteItem) => a.updatedAt.localeCompare(b.updatedAt);

	const totalCompletedSteps = learnerRecords.reduce((total, record) => total + record.steps.length, 0);
	const learnersStarted = learnerRecords.filter((record) => record.steps.length > 0).length;
	const persistence = persistenceStatus();
	const source = persistence.degraded
		? 'In-memory fallback after a DynamoDB failure'
		: persistence.expected
			? 'DynamoDB'
			: 'In-memory store';

	const lines = [
		'# Library AI Workshop — Facilitator Report',
		'',
		`- Generated: ${new Date().toISOString()}`,
		`- Cohort: ${asInlineText(cohort)}`,
		`- Data source: ${source}`,
		'',
		'## Cohort summary',
		'',
		`- Learners enrolled: ${learners.length}`,
		`- Learners who started: ${learnersStarted}`,
		`- Recorded completed steps: ${totalCompletedSteps}`,
		`- Current course catalog steps: ${totalCatalogSteps}`
	];

	if (persistence.degraded || !persistence.expected) {
		lines.push(
			'',
			'> **Data notice:** This report is based on process-local data and may not represent the complete cohort. It will not survive a server restart.'
		);
	}

	lines.push('', '## Module participation', '', '| Module | Learners started | Recorded completed steps |', '| --- | ---: | ---: |');
	for (const module of modules) {
		const moduleSteps = learnerRecords.flatMap((record) =>
			record.steps.filter((step) => step.moduleId === module.id)
		);
		const moduleLearners = new Set(moduleSteps.map((step) => step.learnerId)).size;
		lines.push(`| ${asInlineText(module.title)} | ${moduleLearners} | ${moduleSteps.length} |`);
	}

	lines.push('', '## Learner records');
	for (const { learner, steps, notes } of [...learnerRecords].sort((a, b) =>
		a.learner.name.localeCompare(b.learner.name)
	)) {
		const orderedSteps = [...steps].sort(sortByCompletedAt);
		const orderedNotes = [...notes].sort(sortByUpdatedAt);
		const lastStep = orderedSteps.at(-1);

		lines.push(
			'',
			`### ${asInlineText(learner.name)}`,
			'',
			`- Role: ${asInlineText(learner.role)}`,
			`- Joined: ${learner.createdAt}`,
			`- Last active: ${learner.lastSeen}`,
			`- Recorded completed steps: ${orderedSteps.length}`,
			`- Latest completed step: ${
				lastStep
					? `${exerciseLabel(lastStep.moduleId, lastStep.exerciseId)} — step ${lastStep.stepIndex + 1} (${lastStep.completedAt})`
					: 'No progress recorded'
			}`
		);

		if (orderedSteps.length > 0) {
			lines.push('', '#### Step log', '');
			for (const step of orderedSteps) {
				lines.push(
					`- ${step.completedAt} — ${exerciseLabel(step.moduleId, step.exerciseId)} — step ${step.stepIndex + 1}`
				);
			}
		}

		if (orderedNotes.length > 0) {
			lines.push('', '#### Reflections', '');
			for (const note of orderedNotes) {
				lines.push(
					`**${exerciseLabel(note.moduleId, note.exerciseId)}** (updated ${note.updatedAt})`,
					'',
					asIndentedBlock(note.body),
					''
				);
			}
		}
	}

	if (learnerRecords.length === 0) {
		lines.push('', '_No learner records were found for this cohort._');
	}

	const date = new Date().toISOString().slice(0, 10);
	const fileCohort = cohort.replace(/[^a-z0-9_-]+/gi, '-').replace(/^-+|-+$/g, '') || 'cohort';
	return new Response(`${lines.join('\n')}\n`, {
		headers: {
			'content-type': 'text/markdown; charset=utf-8',
			'content-disposition': `attachment; filename="library-workshop-${fileCohort}-${date}.md"`,
			'cache-control': 'no-store'
		}
	});
};
