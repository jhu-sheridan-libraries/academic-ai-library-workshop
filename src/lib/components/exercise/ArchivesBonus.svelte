<script lang="ts">
	/**
	 * The `## Archives track` section of an exercise body, rendered as an extra
	 * step *after* the numbered ones.
	 *
	 * It used to render inline at the top of the exercise, above step 0, because
	 * putting it in the body meant no schema change. That placement cost both
	 * audiences: an archives learner met the alternative before knowing what it was
	 * an alternative to, and everyone else read several hundred words scripting a
	 * different scenario before reaching the first instruction.
	 *
	 * So it moves here, and it is deliberately not a locked step: no completion
	 * gate, no ordering, open it whenever. Collapsed by default so the exercise
	 * still reads as one flow for the majority who are not on this track.
	 *
	 * `html` is the section with its own `<h2>` already stripped - this card
	 * supplies the heading.
	 */
	let { html }: { html: string } = $props();

	let open = $state(false);
</script>

<div class="rounded-xl border border-dashed border-jhu-gold/60 bg-jhu-gold/5 p-6">
	<button
		onclick={() => (open = !open)}
		aria-expanded={open}
		class="flex w-full items-center gap-3 text-left"
	>
		<span
			class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-jhu-gold/25 text-sm font-bold text-[#8a5a06]"
			aria-hidden="true">+</span
		>
		<span class="min-w-0">
			<span class="block text-[0.9375rem] font-semibold leading-snug tracking-tight text-gray-800">
				Archives track
			</span>
			<span class="mt-0.5 block text-xs leading-relaxed text-gray-500">
				The same exercise on archival material - a finding aid, an accession record, a digitization
				batch. Work this instead of the numbered steps if archives or special collections is your
				work.
			</span>
		</span>
		<span class="ml-auto flex shrink-0 items-center gap-2 pl-2">
			<span class="hidden text-xs text-gray-400 sm:inline">Always unlocked</span>
			<span class="text-xs text-gray-400" aria-hidden="true">{open ? '▲' : '▼'}</span>
		</span>
	</button>

	{#if open}
		<div class="mt-5 border-t border-jhu-gold/30 pt-5">
			<p class="mb-4 text-xs leading-relaxed text-gray-500">
				Nothing here is gated and nothing here is recorded. Progress comes from the numbered steps
				above, so mark those complete as you finish the matching work down here.
			</p>
			<div class="prose max-w-none text-gray-700">
				{@html html}
			</div>
		</div>
	{/if}
</div>
