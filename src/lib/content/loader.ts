import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import type { Module, ModuleMeta, Exercise, ExerciseMeta } from './types.js';

// Content lives at src/content/modules/ relative to the project root.
// In SvelteKit server context, process.cwd() is the project root.
function contentRoot(): string {
	return join(process.cwd(), 'src', 'content', 'modules');
}

function escapeHtml(s: string): string {
	return s
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;');
}

/**
 * Expand ```cowork-prompt fenced blocks into a prompt box with a one-click
 * hand-off to Claude Cowork.
 *
 * Exists for prompts that live in an exercise's body markdown rather than in a
 * step — chiefly the `## Archives track` sections, which substitute their own
 * prompts and would otherwise be the only prompts in the course a learner has to
 * retype. Authors write a normal fenced block; encoding happens here, so nobody
 * hand-writes a percent-encoded URL.
 *
 * Substitution happens BEFORE marked runs, on the raw source, so the prompt text
 * is still the author's original and needs no entity decoding.
 *
 * Styling is inline rather than Tailwind classes on purpose: these class names
 * would only exist in a string inside this file, which is not a reliable thing to
 * ask the Tailwind scanner to find.
 */
function expandCoworkPrompts(src: string): string {
	return src.replace(/```cowork-prompt\r?\n([\s\S]*?)```/g, (_match, body: string) => {
		const prompt = String(body).trim();
		// Documented form; the `/new` segment is required. See PromptStep.svelte.
		const href = `claude://cowork/new?q=${encodeURIComponent(prompt)}`;
		return [
			'',
			'<div style="border:1px solid rgba(0,45,114,0.2);background:rgba(0,45,114,0.05);border-radius:0.5rem;padding:1rem;margin:1rem 0;">',
			`<pre style="white-space:pre-wrap;overflow-x:auto;margin:0;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:0.875rem;line-height:1.6;color:#002D72;">${escapeHtml(prompt)}</pre>`,
			`<a href="${escapeHtml(href)}" style="display:inline-flex;align-items:center;gap:0.5rem;margin-top:0.75rem;border:1px solid #fde68a;background:#fffbeb;border-radius:0.5rem;padding:0.5rem 0.875rem;font-size:0.875rem;font-weight:500;color:#78350f;text-decoration:none;">Open in Claude Cowork &#8599;</a>`,
			'</div>',
			''
		].join('\n');
	});
}

function renderMarkdown(src: string): string {
	return marked.parse(expandCoworkPrompts(src), { async: false }) as string;
}

export function loadAllModules(): ModuleMeta[] {
	const root = contentRoot();
	const dirs = readdirSync(root, { withFileTypes: true })
		.filter((d: { isDirectory: () => boolean }) => d.isDirectory())
		.map((d: { name: string }) => d.name)
		.sort();

	return dirs.map((dir) => {
		const raw = readFileSync(join(root, dir, 'module.md'), 'utf-8');
		const { data } = matter(raw);
		const meta = data as ModuleMeta;
		const exerciseCounts = loadExerciseMeta(dir);
		return {
			...meta,
			exercises: meta.exercises.map((ex) => ({
				...ex,
				step_count: exerciseCounts.find((e) => e.id === ex.id)?.step_count ?? 0
			}))
		};
	});
}

export function loadModule(moduleId: string): Module {
	const root = contentRoot();
	const moduleDir = join(root, moduleId);

	const moduleRaw = readFileSync(join(moduleDir, 'module.md'), 'utf-8');
	const { data: moduleMeta, content: moduleContent } = matter(moduleRaw);

	const exerciseDirs = readdirSync(moduleDir)
		.filter((f) => f !== 'module.md' && f.endsWith('.md'))
		.sort();

	const exercises: Exercise[] = exerciseDirs.map((filename) => {
		return loadExercise(moduleId, filename.replace('.md', ''));
	});

	return {
		...(moduleMeta as ModuleMeta),
		exercises,
		body: renderMarkdown(moduleContent)
	};
}

/**
 * Render the Markdown in a step's `instruction`, for the step types whose
 * components inject it as HTML.
 *
 * `PromptStep` and `WorkspaceStep` use `{@html step.instruction}`; without this,
 * their instructions reached the page as raw Markdown, so backticks, emphasis and
 * paragraph breaks all displayed literally and multi-paragraph instructions ran
 * together into one block of text.
 *
 * `ObserveStep` and `ReflectStep` render `{step.instruction}` as plain text, so
 * they are deliberately left alone — rendering them would show tags.
 *
 * `prompt_text` is never rendered: it is displayed in a `<pre>`, copied to the
 * clipboard, and URL-encoded into a `claude://` link, all of which need the
 * author's exact characters.
 */
function renderStepMarkdown(steps: unknown): unknown {
	if (!Array.isArray(steps)) return steps;
	return steps.map((step) => {
		const s = step as { type?: string; instruction?: string };
		if ((s.type === 'prompt' || s.type === 'workspace') && typeof s.instruction === 'string') {
			return { ...s, instruction: renderMarkdown(s.instruction) };
		}
		return step;
	});
}

export function loadExercise(moduleId: string, exerciseId: string): Exercise {
	const root = contentRoot();
	const filePath = join(root, moduleId, `${exerciseId}.md`);
	const raw = readFileSync(filePath, 'utf-8');
	const { data, content } = matter(raw);

	const exercise = data as Omit<Exercise, 'body'>;

	return {
		...exercise,
		steps: renderStepMarkdown(exercise.steps) as Exercise['steps'],
		body: renderMarkdown(content)
	};
}

export function loadExerciseMeta(moduleId: string): ExerciseMeta[] {
	const root = contentRoot();
	const moduleDir = join(root, moduleId);
	return readdirSync(moduleDir)
		.filter((f) => f !== 'module.md' && f.endsWith('.md'))
		.sort()
		.map((filename) => {
			const raw = readFileSync(join(moduleDir, filename), 'utf-8');
			const { data } = matter(raw);
			return {
			id: data.id,
			title: data.title,
			estimated_minutes: data.estimated_minutes,
			step_count: Array.isArray(data.steps) ? data.steps.length : 0
		};
		});
}
