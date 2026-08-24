import { readFileSync } from 'fs';
import { join } from 'path';
import { marked } from 'marked';
import type { PageServerLoad } from './$types.js';

/**
 * The participant setup guide, served as a help page.
 *
 * `docs/PARTICIPANT-SETUP.md` stays the single source of truth — it is also
 * distributed as a file and rendered to HTML for people who have not got the site
 * yet, so this route reads it rather than keeping a second copy that would drift.
 *
 * Always prerendered. It is static content, it must work in the GitHub Pages
 * build, and a participant who cannot start a session is exactly the person who
 * needs this page to load.
 */
export const prerender = true;

export const load: PageServerLoad = async () => {
	const path = join(process.cwd(), 'docs', 'PARTICIPANT-SETUP.md');
	const raw = readFileSync(path, 'utf-8');

	// The guide's first line is its own H1, which the page supplies as a heading.
	const body = raw.replace(/^#\s+.*\n/, '');

	return {
		html: marked.parse(body, { async: false }) as string
	};
};
