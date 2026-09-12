#!/usr/bin/env bash
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
cd "$root"

# Grok Build / project-local (relative so the committed link is portable)
mkdir -p .grok/skills
ln -sfn ../../skills/remove-ai-marks .grok/skills/remove-ai-marks

# User-global Grok
mkdir -p ~/.grok/skills
ln -sfn "$(pwd)/skills/remove-ai-marks" ~/.grok/skills/remove-ai-marks
