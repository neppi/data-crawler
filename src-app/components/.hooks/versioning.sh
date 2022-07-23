#!/bin/sh
echo "Handle versioning ..."
node scripts/handle-git-version.mjs ./ ./templates/version.ts.template ./lib/version.ts
