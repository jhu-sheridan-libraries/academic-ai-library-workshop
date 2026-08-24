#!/usr/bin/env bash
#
# Package the two participant-facing practice skills as .skill files.
#
# A .skill file is a zip archive of a directory containing SKILL.md. The Claude
# desktop app renders one as a card with a "Save skill" button, which is how
# workshop participants install them — see Step 8 of docs/PARTICIPANT-SETUP.md.
#
# Usage:
#   ./scripts/package-workshop-skills.sh [output-dir]
#
# Output (default):
#   dist-skills/practice-library-reference-interview.skill
#   dist-skills/review-ai-research-output.skill
#
# Run `npm run sync:facilitator-plugin` first so the AI tool guide bundled inside
# each skill matches current course content.

set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
skills_root="$repo_root/plugins/library-ai-workshop-facilitator/skills"
out_dir="${1:-$repo_root/dist-skills}"

# The other two skills in the plugin (facilitate-, run-cohort-) are for
# facilitators and are not distributed this way.
skills=(practice-library-reference-interview review-ai-research-output)

if ! command -v zip >/dev/null 2>&1; then
  echo "error: zip is required but was not found on PATH" >&2
  exit 1
fi

mkdir -p "$out_dir"

for skill in "${skills[@]}"; do
  src="$skills_root/$skill"

  if [ ! -f "$src/SKILL.md" ]; then
    echo "error: $src/SKILL.md not found" >&2
    exit 1
  fi

  out="$out_dir/$skill.skill"
  rm -f "$out"

  # Zip from inside skills_root so the archive contains <skill>/SKILL.md rather
  # than a long absolute path. agents/openai.yaml is Codex configuration that
  # Claude does not read, so it is left out of the participant copy.
  (
    cd "$skills_root"
    zip -q -r -X "$out" "$skill" \
      -x "$skill/agents/*" "*.DS_Store" "*__MACOSX*"
  )

  printf '  %-52s %s\n' "$(basename "$out")" "$(du -h "$out" | cut -f1)"
done

cat <<'EOF'

Written to the output directory above.

Send both files to participants, preferably as download links — mail systems and
chat clients rewrite zip attachments often enough to be a real problem, and a
rewritten file loses the Save skill button rather than failing loudly.

Participants open each file and click Save skill. There is no update channel, so
repackage and resend whenever a skill or its references change.
EOF
