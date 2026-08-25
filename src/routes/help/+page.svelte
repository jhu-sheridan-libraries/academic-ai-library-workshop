<script lang="ts">
	import { base } from '$app/paths';

	let { data }: { data: { html: string } } = $props();

	// The guide references its figures relative to docs/ (`images/figure-01-….svg`).
	// On the site they are served from static/setup-figures/, and the base path has
	// to be applied at render time so this works both at a domain root and under a
	// project subpath on GitHub Pages.
	const html = $derived(data.html.replaceAll('src="images/', `src="${base}/setup-figures/`));
</script>

<svelte:head>
	<title>Setup help - Agents and Skills with Claude</title>
	<meta
		name="description"
		content="How to install Claude, connect it to the workshop account, and attach the workshop folder to a project."
	/>
</svelte:head>

<div class="mx-auto max-w-3xl px-6 py-12">
	<a
		href="{base}/"
		class="mb-10 inline-flex items-center gap-1.5 text-sm text-jhu-blue/60 transition-colors hover:text-jhu-blue"
	>
		← Back to the workshop
	</a>

	<div class="mb-10">
		<p class="mb-3 text-xs font-medium uppercase tracking-wider text-jhu-blue/50">Help</p>
		<h1 class="font-serif text-4xl font-bold leading-tight tracking-tight text-jhu-blue">
			Setting up Claude
		</h1>
		<p class="mt-5 text-[1.0625rem] leading-relaxed text-gray-500">
			Everything you need to do once, before the exercises. You will not write code or use a command
			line.
		</p>
		<div class="mt-7 h-px w-10 bg-jhu-gold"></div>
	</div>

	<div
		class="prose prose-slate max-w-none
			prose-headings:font-serif prose-headings:text-jhu-blue
			prose-h2:mt-12 prose-h2:border-t prose-h2:border-slate-200 prose-h2:pt-8
			prose-a:text-jhu-blue prose-a:underline prose-a:underline-offset-2
			prose-code:rounded prose-code:bg-slate-100 prose-code:px-1 prose-code:py-0.5
			prose-code:font-normal prose-code:before:content-none prose-code:after:content-none
			prose-table:text-sm
			prose-img:rounded-lg prose-img:border prose-img:border-slate-200
			prose-blockquote:border-l-jhu-gold prose-blockquote:not-italic prose-blockquote:text-gray-600"
	>
		{@html html}
	</div>

	<div class="mt-14 rounded-xl border border-jhu-spirit/30 bg-jhu-spirit/5 px-7 py-6">
		<p class="text-sm leading-relaxed text-gray-600">
			<span class="font-semibold text-jhu-blue">Still stuck?</span> Office hours run Fridays,
			2:30&ndash;3:15pm, through November 6. Bring a screenshot of what you are seeing &mdash; and
			mask your API key before sending it anywhere.
		</p>
	</div>
</div>
