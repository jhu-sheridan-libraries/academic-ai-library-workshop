<script lang="ts">
	import CopyButton from '$lib/components/ui/CopyButton.svelte';
	import StepCheckpoint from './StepCheckpoint.svelte';

	let {
		step,
		isComplete,
		onComplete
	}: {
		step: { instruction: string; prompt_text?: string; checkpoint?: string };
		isComplete: boolean;
		onComplete: () => void;
	} = $props();

	// Documented deep-link form is `claude://cowork/new?q=<url-encoded prompt>`.
	// The `/new` segment is required; `claude://cowork?q=` does not open a session.
	// `folder=` is deliberately omitted — the learner connected their own folder in
	// Module 1, and a folder passed by link is treated as untrusted and re-prompts.
	// Prompts are truncated around 14,000 characters; ours are far shorter.
	const coworkUrl = $derived(
		step.prompt_text
			? `claude://cowork/new?q=${encodeURIComponent(step.prompt_text.trim())}`
			: null
	);
</script>

<div class="space-y-3.5">
	<div class="mb-1">
		<span class="rounded-md bg-jhu-blue/8 px-2 py-0.5 font-mono text-[11px] font-medium tracking-wide text-jhu-blue">TRY THIS PROMPT</span>
	</div>

	<div class="prose prose-sm max-w-none leading-relaxed text-gray-700">
		{@html step.instruction}
	</div>

	{#if step.prompt_text}
		<div class="relative rounded-lg border border-jhu-blue/20 bg-jhu-blue/5">
			<div class="absolute right-2 top-2 flex items-center gap-1.5">
				<CopyButton text={step.prompt_text} />
			</div>
			<pre class="overflow-x-auto whitespace-pre-wrap p-4 pr-16 font-mono text-sm leading-relaxed text-jhu-blue">{step.prompt_text.trim()}</pre>
		</div>
		{#if coworkUrl}
			<a
				href={coworkUrl}
				class="inline-flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3.5 py-2 text-sm font-medium text-amber-900 transition-colors hover:border-amber-300 hover:bg-amber-100"
			>
				<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
					<polyline points="15 3 21 3 21 9" />
					<line x1="10" y1="14" x2="21" y2="3" />
				</svg>
				Open in Claude Cowork
			</a>
		{/if}
	{/if}

	{#if isComplete && step.checkpoint}
		<StepCheckpoint text={step.checkpoint} />
	{/if}

	{#if !isComplete}
		<div class="flex items-center gap-4 pt-1">
			{#if step.checkpoint}
				<p class="text-sm leading-relaxed text-gray-500 italic">{step.checkpoint}</p>
			{/if}
			<button
				onclick={onComplete}
				class="ml-auto shrink-0 rounded-lg bg-jhu-blue px-4 py-2 text-sm font-medium text-white hover:bg-blue-950"
			>
				Mark Complete →
			</button>
		</div>
	{/if}
</div>
