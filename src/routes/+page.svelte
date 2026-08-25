<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import { base } from '$app/paths';
	import { PUBLIC_STATIC } from '$env/static/public';
	import ModuleCard from '$lib/components/modules/ModuleCard.svelte';
	import LearnerIdentityModal from '$lib/components/ui/LearnerIdentityModal.svelte';
	const IS_STATIC = PUBLIC_STATIC === 'true';

	let { data } = $props();

	// Count completed steps per module
	function moduleCompletedSteps(moduleId: string) {
		return data.completedSteps.filter((s) => s.moduleId === moduleId).length;
	}

	function moduleCurrentExerciseNum(moduleId: string): number | null {
		const mod = data.modules.find((m) => m.id === moduleId);
		if (!mod) return null;
		const seen = new Set(
			data.completedSteps.filter((s) => s.moduleId === moduleId).map((s) => s.exerciseId)
		);
		if (seen.size === 0) return null;
		let furthestIdx = -1;
		mod.exercises.forEach((ex, i) => { if (seen.has(ex.id)) furthestIdx = i; });
		return furthestIdx >= 0 ? furthestIdx + 1 : null;
	}

	function moduleTotalSteps(moduleId: string) {
		const mod = data.modules.find((m) => m.id === moduleId);
		if (!mod) return 0;
		return mod.exercises.reduce((sum, ex) => sum + (ex.step_count ?? 0), 0);
	}

	const showModal = $derived(!data.learnerId && !IS_STATIC);

	async function handleIdentified() {
		await invalidateAll();
	}
</script>

<div class="relative overflow-hidden">
	<!-- Research-project watermark -->
	<div
		aria-hidden="true"
		class="pointer-events-none absolute right-0 top-0 w-72 select-none px-6 pt-12 opacity-[0.07]"
		style="mask-image: linear-gradient(to bottom, black 0%, black 55%, transparent 100%); -webkit-mask-image: linear-gradient(to bottom, black 0%, black 55%, transparent 100%);"
	>
		<pre class="font-mono text-[0.6rem] leading-[1.7] text-jhu-blue">RESEARCH SUPPORT PROJECT

Sources enabled
  ✓ WORKSPACE-BRIEF.md
  ✓ research-request.txt
  ✓ public web
  - connected drives off

Research question
  How does open access affect
  the reach and use of public-
  health research?

Plan review
  ✓ separate outcome families
  ✓ include mixed findings
  ✓ record coverage gaps

Source audit
  12 checked
   2 partly supported
   1 inaccessible

Human review
  pending</pre>
	</div>

	<!-- Page content -->
	<div class="relative mx-auto max-w-4xl px-6 py-16">
		<div class="mb-12 text-center">
			<p class="mb-3 text-xs font-medium uppercase tracking-wider text-jhu-blue/60">
				The Sheridan Libraries &middot; Johns Hopkins University
			</p>
			<div class="mx-auto max-w-2xl rounded-2xl border border-jhu-blue/10 bg-white/80 px-6 py-8 shadow-sm sm:px-10">
				<h1 class="font-serif text-[2.5rem] font-bold leading-tight tracking-tight text-jhu-blue">
					Agents and Skills with Claude
				</h1>
				<p class="mx-auto mt-4 max-w-lg text-[0.9375rem] leading-7 text-gray-600">
					How an AI workspace can work with files, and how to create reusable instructions of your own.
					For library staff; no programming experience required.
				</p>
				<div class="my-6 h-px bg-jhu-blue/10"></div>
				<p class="font-mono text-[0.6875rem] tracking-wide text-jhu-blue/60">
					exercises run in
					<a
						href="{base}/terminal-primer"
						class="underline decoration-jhu-gold/70 underline-offset-2 transition-colors hover:text-jhu-blue"
						>Claude, with a folder attached</a
					>
					&nbsp;·&nbsp; no coding &nbsp;·&nbsp; self-paced
				</p>
				<div class="mt-5 rounded-xl bg-jhu-blue/[0.04] px-5 py-4 text-left">
					<p class="text-sm leading-6 text-gray-600">
						First time here?
						<a
							href="{base}/help"
							class="font-medium text-jhu-blue underline decoration-jhu-gold/70 underline-offset-2 hover:text-blue-950"
							>Set up Claude first</a
						>.
					</p>
					<p class="mt-3 text-sm leading-6 text-gray-500">
						You work through this alone and at your own pace. Each step explains what counts as enough,
						and stopping partway is fine - your place is saved. Your facilitator is remote: they can see
						which steps you have completed and anything you type into a reflection box, which helps them
						identify where people are getting stuck. Bring questions that remain unresolved to the optional
						walkthrough or the office hours in your invitation.
					</p>
				</div>
			</div>
		</div>

		<div class="flex flex-wrap justify-center gap-6">
			{#each data.modules as mod}
				<div class="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
					<ModuleCard
						module={mod}
						completedSteps={moduleCompletedSteps(mod.id)}
						totalSteps={moduleTotalSteps(mod.id)}
						currentExerciseNum={moduleCurrentExerciseNum(mod.id)}
					/>
				</div>
			{/each}
		</div>

		{#if data.modules.length === 0}
			<div class="mx-auto max-w-sm rounded-xl border border-amber-200 bg-amber-50 p-6 text-center">
				<p class="font-medium text-amber-800">No workshop modules found</p>
				<p class="mt-2 text-sm leading-6 text-amber-700">
					The content files couldn't be loaded. Make sure the
					<code class="rounded bg-amber-100 px-1 font-mono text-xs">src/content/modules/</code>
					directory exists and restart the dev server.
				</p>
			</div>
		{/if}
	</div>
</div>

{#if showModal}
	<LearnerIdentityModal onIdentified={handleIdentified} />
{/if}
