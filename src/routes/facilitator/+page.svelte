<script lang="ts">
	import { onMount } from 'svelte';
	import { invalidate } from '$app/navigation';
	import PacingAlert from '$lib/components/facilitator/PacingAlert.svelte';
	import CohortProgressTable from '$lib/components/facilitator/CohortProgressTable.svelte';
	import ModuleHeatmap from '$lib/components/facilitator/ModuleHeatmap.svelte';
	import TalkingPoints from '$lib/components/facilitator/TalkingPoints.svelte';

	let { data } = $props();
	let alertDismissed = $state(false);

	onMount(() => {
		const interval = setInterval(() => invalidate('app:cohort'), 30_000);
		return () => clearInterval(interval);
	});
</script>

<div class="mx-auto max-w-7xl px-4 py-8">
	<div class="mb-6 flex items-center justify-between">
		<div>
			<h1 class="text-2xl font-bold text-gray-900">Facilitator Dashboard</h1>
			<p class="text-sm text-gray-500">Cohort: {data.cohort} · {data.totalLearners} learners</p>
		</div>
		{#if data.persistence.degraded}
			<span class="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700">
				Not recording
			</span>
		{:else if !data.persistence.expected}
			<span class="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
				In-memory only
			</span>
		{:else}
			<span class="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
				Live · refreshes every 30s
			</span>
		{/if}
	</div>

	{#if data.persistence.degraded}
		<div class="mb-6 rounded-lg border border-red-300 bg-red-50 px-5 py-4">
			<p class="text-sm font-semibold text-red-800">
				This dashboard is not showing saved data.
			</p>
			<p class="mt-2 text-sm leading-relaxed text-red-700">
				DynamoDB was configured but a call to it failed
				{#if data.persistence.reason}(<code>{data.persistence.reason}</code>){/if}, so the app fell
				back to in-process storage. Anything below reflects only this server process, and progress
				is not being saved. An empty table here does <strong>not</strong> mean nobody has started.
			</p>
			<p class="mt-2 text-sm leading-relaxed text-red-700">
				Common causes, in order: the server was started without its environment
				(<code>npm run start</code> passes <code>--env-file=.env</code>; a bare
				<code>node build/index.js</code> does not), an expired SSO session
				(<code>aws sso login</code>), a table name that does not match, or a missing
				<code>cohort-lastSeen-index</code> GSI. Restart the server after fixing it — the fallback
				latches for the life of the process.
			</p>
		</div>
	{:else if !data.persistence.expected}
		<div class="mb-6 rounded-lg border border-amber-300 bg-amber-50 px-5 py-4">
			<p class="text-sm leading-relaxed text-amber-800">
				Persistence is off, so this dashboard shows only learners served by this server process and
				nothing survives a restart. That is the expected state for a learner running the course
				locally. To track a cohort, set <code>DYNAMODB_TABLE</code> and an AWS credential source —
				see <code>docs/DEPLOYMENT.md</code>.
			</p>
		</div>
	{/if}

	{#if !alertDismissed}
		<PacingAlert
			behindCount={data.behindCount}
			medianLabel={data.medianLabel}
			onDismiss={() => (alertDismissed = true)}
		/>
	{/if}

	<div class="grid gap-6 lg:grid-cols-3">
		<div class="lg:col-span-2">
			<ModuleHeatmap cells={data.heatmapCells} totalLearners={data.totalLearners} />
		</div>
		<div>
			<TalkingPoints points={data.talkingPoints} />
		</div>
	</div>

	<div class="mt-6">
		<CohortProgressTable learners={data.learners} token={data.token} />
	</div>
</div>
