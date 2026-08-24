/**
 * Generate docs/PARTICIPANT-SETUP.html from docs/PARTICIPANT-SETUP.md.
 *
 * Why this exists: the two files were maintained by hand and drifted, and the
 * drift produced participant instructions that were actively wrong — the HTML
 * kept telling people to invoke a skill they had never been given, months after
 * the Markdown had been corrected. The Markdown is the single source of truth;
 * this script makes the HTML a build artifact so it cannot fall behind again.
 *
 * The output is aimed at print and offline reading: a fixed measure, point sizes,
 * and page-break rules. The site serves the same Markdown at /help, so this is
 * the paper copy rather than the primary channel.
 *
 * Usage:  npm run build:guide
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from 'marked';

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SOURCE = join(repoRoot, 'docs', 'PARTICIPANT-SETUP.md');
const TARGET = join(repoRoot, 'docs', 'PARTICIPANT-SETUP.html');

/**
 * Print stylesheet. Kept here rather than in a separate file so the generated
 * document stays a single portable artifact — someone emailed this HTML should be
 * able to open it anywhere, and figures aside it should need nothing else.
 */
const STYLE = `
  body { font-family: Calibri, "Segoe UI", Helvetica, Arial, sans-serif;
         font-size: 11.5pt; line-height: 1.5; color: #1a1a1a;
         max-width: 6.5in; margin: 0.6in auto; }
  h1 { font-size: 22pt; margin: 0 0 4pt 0; line-height: 1.2; }
  h2 { font-size: 15pt; margin: 26pt 0 6pt 0; border-bottom: 1px solid #c8c8c8;
       padding-bottom: 3pt; }
  h3 { font-size: 12.5pt; margin: 16pt 0 4pt 0; }
  p.subtitle { font-size: 12pt; color: #555; margin: 0 0 18pt 0; }
  table { border-collapse: collapse; width: 100%; margin: 10pt 0; font-size: 10.5pt; }
  th, td { border: 1px solid #bbb; padding: 5pt 7pt; text-align: left;
           vertical-align: top; }
  th { background: #eef1f4; font-weight: 600; }
  code { font-family: Consolas, "Courier New", monospace; font-size: 10.5pt;
         background: #f2f2f2; padding: 1pt 3pt; }
  ol, ul { margin: 8pt 0 8pt 0; padding-left: 24pt; }
  li { margin-bottom: 5pt; }
  a { color: #1a1a1a; }
  .figure { border: 1pt solid #d5d9de; background: #fafbfc;
            padding: 10pt 12pt; margin: 14pt 0; page-break-inside: avoid; }
  .figure .cap { font-weight: bold; display: block; margin-bottom: 6pt; }
  .figure img { display: block; max-width: 100%; height: auto;
                border: 1pt solid #c4c9d0; background: #fff; }
  /* Capture instructions for whoever takes the screenshots. Kept in the source
     so the shot list travels with the document, but hidden from participants.
     Set to \`block\` while producing the figures, then back to \`none\`. */
  .figure .note { display: none; font-size: 10pt; color: #444; margin: 7pt 0 0 0; }
  /* Callouts and prompts come through as blockquotes and code blocks. The
     Markdown does not distinguish them, and for a printed guide it does not need
     to — both read as set apart from the running text. */
  blockquote { border-left: 3pt solid #5b6b7d; background: #f4f6f8;
               padding: 8pt 12pt; margin: 12pt 0; }
  blockquote p { margin: 0 0 6pt 0; }
  blockquote p:last-child { margin-bottom: 0; }
  pre { border-left: 3pt solid #999; background: #f8f8f8; padding: 6pt 12pt;
        margin: 10pt 0; overflow-x: auto; page-break-inside: avoid; }
  pre code { background: none; padding: 0; font-size: 10.5pt; }
  hr { border: none; border-top: 1px solid #d5d9de; margin: 22pt 0; }
  /* A paragraph that is nothing but bold text is a URL or a menu path set on its
     own line — the hand-built guide gave those block treatment, and :has keeps
     that without needing a marker in the Markdown. Browsers without :has simply
     render them as ordinary bold, which is a fair fallback. */
  p:has(> strong:only-child) { margin: 10pt 0; font-size: 12pt; }
  p:has(> strong:only-child) strong { font-weight: bold; }
  @media print {
    body { margin: 0; max-width: none; }
    h2 { page-break-after: avoid; }
    table, ol, ul { page-break-inside: avoid; }
    a { text-decoration: none; }
  }
`;

/**
 * Rewrite the blockquotes that marked produces for figures into the `.figure`
 * structure the stylesheet expects.
 *
 * In the Markdown a figure is a blockquote holding a bold caption, an image, and
 * an HTML comment carrying capture instructions. Detection keys on the presence
 * of an `<img>`, which is what actually makes a blockquote a figure — the caption
 * and the note are both optional, so a figure added without either still renders.
 *
 * The comment becomes a `<p class="note">`, hidden by default. That keeps the shot
 * list travelling with the document without showing it to participants.
 */
function promoteFigures(html) {
	let count = 0;

	const out = html.replace(
		/<blockquote>\s*([\s\S]*?)\s*<\/blockquote>/g,
		(whole, inner) => {
			if (!/<img\b/.test(inner)) return whole; // an ordinary quote or callout

			count += 1;

			const caption = inner.match(/<strong>([\s\S]*?)<\/strong>/);
			const image = inner.match(/<img\b[^>]*>/);
			const comment = inner.match(/<!--([\s\S]*?)-->/);

			const parts = ['<div class="figure">'];
			if (caption) parts.push(`<span class="cap">${caption[1].trim()}</span>`);
			if (image) parts.push(image[0]);
			if (comment) {
				// Capture:/Highlight: labels are italicised, and each becomes its own
				// line, matching how the notes were written by hand.
				const note = comment[1]
					.trim()
					.replace(/\s*\n\s*/g, '<br>\n')
					.replace(/(Capture|Highlight):/g, '<em>$1:</em>');
				parts.push(`<p class="note">${note}</p>`);
			}
			parts.push('</div>');
			return parts.join('\n');
		}
	);

	return { html: out, count };
}

const raw = readFileSync(SOURCE, 'utf-8');

// The document's own H1 and the bold subtitle beneath it are emitted from the
// template, so the title block can carry print-specific styling.
const titleMatch = raw.match(/^#\s+(.+)$/m);
const title = titleMatch ? titleMatch[1].trim() : 'Participant Setup';

const subtitleMatch = raw.match(/^\*\*(.+?)\*\*\s*$/m);
const subtitle = subtitleMatch ? subtitleMatch[1].trim() : '';

let body = raw;
if (titleMatch) body = body.replace(titleMatch[0], '');
if (subtitleMatch) body = body.replace(subtitleMatch[0], '');
// Strip the leading horizontal rule left behind under the title block.
body = body.replace(/^\s*(---\s*)+/, '');

const rendered = marked.parse(body, { async: false });
const { html: withFigures, count: figureCount } = promoteFigures(rendered);

const document = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<!-- GENERATED FILE — do not edit.
     Source: docs/PARTICIPANT-SETUP.md
     Rebuild: npm run build:guide
     Hand edits here will be overwritten, and the two files drifting apart is the
     specific problem this generator was written to stop. -->
<style>${STYLE}</style>
</head>
<body>

<h1>${title}</h1>
${subtitle ? `<p class="subtitle">${subtitle}</p>` : ''}

${withFigures}
</body>
</html>
`;

writeFileSync(TARGET, document, 'utf-8');

console.log(
	`Wrote docs/PARTICIPANT-SETUP.html from docs/PARTICIPANT-SETUP.md ` +
		`(${figureCount} figure${figureCount === 1 ? '' : 's'}).`
);

if (figureCount === 0) {
	console.warn(
		'Warning: no figures were found. The Markdown normally carries eleven. ' +
			'Check that figure blockquotes still contain an image.'
	);
}
