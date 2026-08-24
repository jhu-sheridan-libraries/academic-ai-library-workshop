# Figures for PARTICIPANT-SETUP

All eleven figures currently exist as SVG diagrams and render in the guide today. They are
schematic illustrations of the interface, not captures of a real screen, and each one says so
in small grey type along its bottom edge. They are meant to be replaced by real screenshots
when someone has a machine in front of them, but the guide is complete and usable as it stands.

Why diagrams rather than screenshots: the figures show the Claude desktop application on macOS
and Windows, which can only be captured by a person running it. A diagram that is obviously a
diagram is safer than a convincing-looking screenshot with details guessed wrong — a participant
trusts the latter and then hunts for a button that was never there.

## Replacing a diagram with a real screenshot

1. Capture the shot described in the table below and save it as
   `figure-NN-<same-name>.png` in this folder.
2. In both `docs/PARTICIPANT-SETUP.md` and `docs/PARTICIPANT-SETUP.html`, change that one
   filename's extension from `.svg` to `.png`. Nothing else needs to move.
3. Delete the `.svg` once you are happy with the replacement.

The alt text already in both documents describes the finished figure including its annotations,
so it does not need rewriting when the image is swapped.

## Shot list

| # | Filename stem | Platform | Where to be | What to highlight |
|---|---|---|---|---|
| 1 | `figure-01-download-page` | Either | A browser at https://claude.com/download | Box around the primary download button |
| 2 | `figure-02-macos-dmg` | macOS | The mounted `.dmg` window, showing the Claude icon and the Applications shortcut | Arrow from the Claude icon to the Applications folder |
| 3 | `figure-03-macos-gatekeeper` | macOS | First launch, at the "downloaded from the internet" dialog | Box around the Open button |
| 4 | `figure-04-windows-smartscreen` | Windows | "Windows protected your PC", after clicking More info so the publisher shows | Boxes around the publisher name and Run anyway |
| 5 | `figure-05-devmode-macos` | macOS | Menu bar, Help open, Troubleshooting submenu expanded | Box around Enable Developer Mode |
| 6 | `figure-06-devmode-windows` | Windows | Sign-in screen, hamburger menu open, Help then Troubleshooting expanded | Circle the hamburger button; box around Enable Developer Mode |
| 7 | `figure-07-developer-menu` | Either | The Developer menu open | Box around Configure Third-Party Inference |
| 8 | `figure-08-bedrock-config` | Either | The third-party inference window, Amazon Bedrock selected, all fields filled | Number each field 1–5 to match the steps in Step 5 |
| 9 | `figure-09-cowork-tab` | Either | Main Claude window with Cowork selected | Box around the Cowork tab |
| 10 | `figure-10-connect-folder` | Either | Cowork's confirmation of the connected folder | Box around the connected folder path |
| 11 | `figure-11-save-skill` | Either | A `.skill` file opened in Claude, showing its card before it is saved | Box around the Save skill button |
| 12 | `figure-12-releases-download` | Either | The repository's `workshop-materials` release page, scrolled so the Assets list is visible | Box around `library-context.zip`. **Not yet drawn** — see below |
| 13 | `figure-13-folder-picker` | Either | Cowork's folder chooser, opened to show `library-context` nested inside the unzipped parent folder | Box around `library-context`; a lighter marker on the parent to show which one *not* to pick. **Not yet drawn** — see below |

## Figures 12 and 13 — identified, not yet made

Neither exists yet, and neither is referenced from the guide, so nothing is broken today. Both cover
steps added after the original eleven were drawn, and both address a place where participants are
known to go wrong:

**Figure 12** supports the download in "Before you start". A GitHub release page puts its release
notes above a collapsed-looking Assets list, and a participant who has never used one tends to click
the green *Code* button or the auto-generated "Source code (zip)" instead of `library-context.zip`.
Those give them the whole repository — larger, and containing facilitator notes that spoil several
exercises. This is the single most useful figure still missing.

**Figure 13** supports Step 7. The recurring mistake is selecting the folder one level above
`library-context`, which leaves Claude unable to see `WORKSPACE-BRIEF.md`. The troubleshooting table
names this twice, which is a sign it wants a picture instead. What matters is showing the nesting,
not the chrome of the file dialog.

Add them to the guide only once the images exist; a reference to a missing file renders as a broken
image, which is worse than no figure.

Capture at a normal display scale, crop to the window or menu rather than the whole screen, and
aim for roughly 1400 px wide for full-window shots. Annotations go on top of the capture before
saving.

## Before you publish figure 8

Figure 8 shows a filled-in credential window. Replace the API key with a masked value such as
`bdrk-••••••••••••` before saving, and check the region and model fields reveal nothing beyond
what is already printed on the credential card. A screenshot containing a live key is a leaked
key. The SVG stand-in already shows the key masked.

## Capture tools

On macOS, `Cmd+Shift+4` captures a selection and `Cmd+Shift+5` offers a window-capture mode that
includes the drop shadow; hold `Space` after `Cmd+Shift+4` to grab a single window. Menus stay
open while a capture is in progress, which is what makes figures 5 and 7 possible. On Windows,
use `Win+Shift+S`; menu captures are easier with the Snipping Tool's delay option, since clicking
away closes the menu.

## Reviewing the diagrams

`contact-sheet.html` shows all eleven side by side with their figure numbers, which is the
quickest way to check them after an edit.

## The HTML guide is generated

`PARTICIPANT-SETUP.html` is built from `PARTICIPANT-SETUP.md` by
`npm run build:guide`. Do not edit the HTML by hand — it will be overwritten, and the two files
drifting apart is exactly what the generator exists to prevent. Edit the Markdown and rebuild.

The generator turns each figure blockquote into the `.figure` structure by looking for an `<img>`
inside it, lifts the bold caption into `<span class="cap">`, and converts the HTML comment into the
hidden `<p class="note">`. So a new figure needs no change to the script: write it in the Markdown
the same shape as the existing eleven and it will come through.

## Where the capture notes live

The capture and highlight instructions are also embedded in the two guide documents — as HTML
comments in the Markdown, and behind a `display: none` rule on `.figure .note` in the HTML.
Flip that rule to `display: block` for a working copy that shows the instructions inline.
