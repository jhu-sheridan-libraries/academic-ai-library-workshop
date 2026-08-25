<script lang="ts">
	import '../app.css';
	import AppNav from '$lib/components/layout/AppNav.svelte';
	import type { Snippet } from 'svelte';
	import type { ModuleMeta } from '$lib/content/types.js';

	let {
		data,
		children
	}: {
		data: { modules: ModuleMeta[]; learner: { name: string } | null };
		children: Snippet;
	} = $props();

	// Branding is hardcoded rather than read from the environment. This is the JHU
	// Sheridan Libraries build, and a missing env var silently publishing an
	// unbranded site is a worse failure than losing the configurability.
	const ORG = 'The Sheridan Libraries';
	const ORG_PARENT = 'Johns Hopkins University';
	const TITLE = 'Agents and Skills with Claude - Sheridan Libraries';
</script>

<svelte:head>
	<title>{TITLE}</title>
	<meta
		name="description"
		content="A self-paced workshop for {ORG} staff: what an agentic desktop can do, and how to compose a custom Skill. No programming experience required."
	/>
	<meta name="theme-color" content="#002D72" />
</svelte:head>

<div class="min-h-screen bg-slate-50 flex flex-col">
	<AppNav modules={data.modules} learnerName={data.learner?.name ?? null} />
	<main class="flex-1">
		{@render children()}
	</main>
	<footer class="border-t border-gray-200 bg-white py-6 text-center">
		<p class="text-xs font-medium uppercase tracking-wider text-jhu-blue/70">
			{ORG}
		</p>
		<p class="mt-1 text-xs text-gray-400">{ORG_PARENT}</p>
		<p class="mt-3 text-xs text-gray-400">
			&copy; {new Date().getFullYear()} Steven J. Miklovic. All rights reserved.
		</p>
	</footer>
</div>
