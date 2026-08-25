/**
 * In-process fallback store.
 *
 * The workshop is a self-paced module. A learner working through it on their own
 * machine should not need an AWS account, a DynamoDB table, or any credential at
 * all — so persistence is optional, and this is what runs when it is switched off
 * or when DynamoDB is configured but unreachable.
 *
 * Scope and limits, deliberately: this lives in the Node process. It is lost on
 * restart, it is not shared between server instances, and the facilitator
 * dashboard backed by it only sees learners who used *this* process. That is fine
 * for self-paced use and for a local demo. Cohort tracking across a real group
 * needs DynamoDB — see docs/DEPLOYMENT.md.
 */

import { ttlEpoch } from './schema.js';
import type { LearnerItem, ProgressItem, NoteItem } from './queries.js';

const learners = new Map<string, LearnerItem>();
/** learnerId -> `${moduleId}#${exerciseId}#${stepIndex}` -> item */
const progress = new Map<string, Map<string, ProgressItem>>();
/** learnerId -> `${moduleId}#${exerciseId}` -> item */
const notes = new Map<string, Map<string, NoteItem>>();

function learnerPk(learnerId: string) {
	return `learner#${learnerId}`;
}

export function localCreateLearner(opts: {
	id: string;
	name: string;
	role: string;
	cohort: string;
}): void {
	const now = new Date().toISOString();
	learners.set(opts.id, {
		pk: learnerPk(opts.id),
		sk: 'META',
		id: opts.id,
		name: opts.name,
		role: opts.role,
		cohort: opts.cohort,
		createdAt: now,
		lastSeen: now,
		expiresAt: ttlEpoch()
	});
}

export function localGetLearner(learnerId: string): LearnerItem | null {
	return learners.get(learnerId) ?? null;
}

export function localUpdateLearnerName(learnerId: string, name: string): void {
	const existing = learners.get(learnerId);
	if (existing) learners.set(learnerId, { ...existing, name });
}

export function localUpdateLastSeen(learnerId: string): void {
	const existing = learners.get(learnerId);
	if (existing) learners.set(learnerId, { ...existing, lastSeen: new Date().toISOString() });
}

export function localGetLearnersByCohort(cohort: string): LearnerItem[] {
	return [...learners.values()]
		.filter((l) => l.cohort === cohort)
		.sort((a, b) => b.lastSeen.localeCompare(a.lastSeen));
}

export function localRecordStepComplete(opts: {
	learnerId: string;
	moduleId: string;
	exerciseId: string;
	stepIndex: number;
}): void {
	const key = `${opts.moduleId}#${opts.exerciseId}#${String(opts.stepIndex).padStart(3, '0')}`;
	let forLearner = progress.get(opts.learnerId);
	if (!forLearner) {
		forLearner = new Map<string, ProgressItem>();
		progress.set(opts.learnerId, forLearner);
	}
	forLearner.set(key, {
		pk: learnerPk(opts.learnerId),
		sk: `progress#${key}`,
		learnerId: opts.learnerId,
		moduleId: opts.moduleId,
		exerciseId: opts.exerciseId,
		stepIndex: opts.stepIndex,
		completedAt: new Date().toISOString(),
		expiresAt: ttlEpoch()
	});
}

export function localGetLearnerProgress(learnerId: string): ProgressItem[] {
	return [...(progress.get(learnerId)?.values() ?? [])];
}

export function localUpsertNote(opts: {
	learnerId: string;
	moduleId: string;
	exerciseId: string;
	body: string;
}): void {
	const key = `${opts.moduleId}#${opts.exerciseId}`;
	let forLearner = notes.get(opts.learnerId);
	if (!forLearner) {
		forLearner = new Map<string, NoteItem>();
		notes.set(opts.learnerId, forLearner);
	}
	const now = new Date().toISOString();
	const existing = forLearner.get(key);
	forLearner.set(key, {
		pk: learnerPk(opts.learnerId),
		sk: `note#${key}`,
		learnerId: opts.learnerId,
		moduleId: opts.moduleId,
		exerciseId: opts.exerciseId,
		body: opts.body,
		createdAt: existing?.createdAt ?? now,
		updatedAt: now,
		expiresAt: ttlEpoch()
	});
}

export function localGetLearnerNotes(learnerId: string): NoteItem[] {
	return [...(notes.get(learnerId)?.values() ?? [])];
}

export function localDeleteLearner(learnerId: string): void {
	learners.delete(learnerId);
	progress.delete(learnerId);
	notes.delete(learnerId);
}
