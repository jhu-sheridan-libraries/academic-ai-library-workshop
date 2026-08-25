<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>What an Agentic Desktop Does - Agents and Skills with Claude</title>
</svelte:head>

<div class="mx-auto max-w-3xl px-6 py-14">
	<a href="{base}/" class="mb-10 inline-flex items-center gap-1.5 text-sm text-jhu-blue/60 transition-colors hover:text-jhu-blue">
		← Back to workshop
	</a>

	<div class="mb-12">
		<p class="mb-3 text-xs font-medium uppercase tracking-wider text-jhu-blue/50">Before you begin</p>
		<h1 class="font-serif text-4xl font-bold leading-tight tracking-tight text-jhu-blue">How This AI Workspace Works</h1>
		<p class="mt-5 text-[1.0625rem] leading-relaxed text-gray-500">
			This course runs in Claude, in a project with a folder on your own computer attached to it. That is a different thing from a chat window. Everything you need is in the folder - there is nothing to upload, and your work comes out as files you keep.
		</p>
		<p class="mt-4 text-[1.0625rem] leading-relaxed text-gray-500">
			Working on ChatGPT Codex, Kiro, or another agentic desktop instead? The concepts carry over. Ask your facilitator for the <span class="font-medium text-jhu-blue">Other Platforms</span> note, which explains which parts work the same and which do not.
		</p>
		<div class="mt-7 h-px w-10 bg-jhu-gold"></div>
	</div>

	<section class="mb-12">
		<h2 class="mb-5 font-serif text-2xl font-bold text-jhu-blue">The five things to know</h2>
		<div class="overflow-x-auto rounded-xl border border-slate-200 bg-white">
			<table class="w-full text-left text-sm">
				<thead class="border-b border-slate-200 bg-slate-50 text-gray-700">
					<tr><th class="p-4">Course term</th><th class="p-4">What it means</th></tr>
				</thead>
				<tbody class="divide-y divide-slate-100 text-gray-600">
					<tr><td class="p-4 font-medium text-gray-800">Connected folder</td><td class="p-4">A folder on your computer that you attach to a project so Claude can read and write it. Claude can access everything inside it, including files added later, so choose a folder with only the material you intend to share</td></tr>
					<tr><td class="p-4 font-medium text-gray-800">Standing brief</td><td class="p-4"><code>WORKSPACE-BRIEF.md</code> in that folder. It contains the professional standards and limits Claude should follow</td></tr>
					<tr><td class="p-4 font-medium text-gray-800">File output</td><td class="p-4">Deliverables written to <code>outputs/</code> as documents and spreadsheets you keep, not text in a conversation</td></tr>
					<tr><td class="p-4 font-medium text-gray-800">Action approval</td><td class="p-4">Claude asks before it changes a file. Read what it proposes, then decide - this is the habit worth building</td></tr>
					<tr><td class="p-4 font-medium text-gray-800">Skill</td><td class="p-4">A Markdown file with reusable instructions that Claude loads automatically when the request matches. You will write one in Module 4</td></tr>
				</tbody>
			</table>
		</div>
	</section>

	<section class="mb-12">
		<h2 class="mb-5 font-serif text-2xl font-bold text-jhu-blue">The five checks before every task</h2>
		<ol class="space-y-4 text-sm leading-relaxed text-gray-600">
			<li><span class="font-semibold text-jhu-blue">1. Purpose:</span> What research decision or deliverable will this support?</li>
			<li><span class="font-semibold text-jhu-blue">2. Data:</span> Is every file de-identified, necessary, and approved for this system?</li>
			<li><span class="font-semibold text-jhu-blue">3. Sources:</span> Which folder can this session access? Can it use the web? Is anything connected that it does not need?</li>
			<li><span class="font-semibold text-jhu-blue">4. Review:</span> Who will verify citations, calculations, search syntax, and claims?</li>
			<li><span class="font-semibold text-jhu-blue">5. Closure:</span> What will be exported, retained, disconnected, or deleted?</li>
		</ol>
	</section>

	<div class="mb-12 rounded-xl border border-jhu-spirit/30 bg-jhu-spirit/5 px-7 py-6">
		<p class="text-sm leading-relaxed text-gray-600">
			<span class="font-semibold text-jhu-blue">Never use real patron data in these exercises.</span>
			The workshop files are simulated and de-identified. Keep email, drives, calendars, and institutional repositories disconnected unless your facilitator confirms an approved training environment.
		</p>
	</div>

	<section class="mb-12">
		<h2 class="mb-4 font-serif text-2xl font-bold text-jhu-blue">If you get stuck</h2>
		<p class="text-sm leading-relaxed text-gray-600">
			Setup is covered step by step in <span class="font-medium text-jhu-blue">docs/PARTICIPANT-SETUP.md</span>, including a troubleshooting table for the errors people actually hit. There are office hours on Fridays, 2:30&ndash;3:15pm, through November 6 &mdash; bring a screenshot of the error and mask any credential before you send it.
		</p>
		<p class="mt-4 text-sm leading-relaxed text-gray-600">
			The practice baseline for this course is the
			<a class="text-jhu-blue underline" href="https://www.ala.org/acrl/standards/ai" target="_blank" rel="noopener noreferrer">ACRL AI Competencies for Academic Library Workers</a>
			and the
			<a class="text-jhu-blue underline" href="https://www.ala.org/sites/default/files/2026-06/ALA%20CD%2044.2%20AI%20Guidance%20Document%20-%20Final.pdf" target="_blank" rel="noopener noreferrer">ALA Guidance on the Use of Artificial Intelligence in Libraries</a>.
			Those principles, not any product's feature list, define what completing this course means.
		</p>
	</section>

	<div class="text-center">
		<a href="{base}/" class="inline-flex items-center gap-2 rounded-full bg-jhu-blue px-8 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-jhu-blue/90">
			I'm ready - take me to the modules →
		</a>
	</div>
</div>
