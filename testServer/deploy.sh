#!/usr/bin/env bash

set -euo pipefail

TARBALL_FILE=deploy_$(date +"%Y-%m-%d_%H%M%S").tar.gz

tar czf "${TARBALL_FILE}" -C src .

scp "${TARBALL_FILE}" teamup:~/
ssh teamup "cd ~/app && rm -rf * && tar xzf ../${TARBALL_FILE} && sudo supervisorctl restart app"
