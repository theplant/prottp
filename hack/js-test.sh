#!/usr/bin/env bash

set -o errexit
set -o nounset
set -o pipefail

trap "exit" INT TERM
trap "kill 0" EXIT

cd example && make installgo && cd ..

cd example && make rungo &

cd example && make runjs

kill %1

exit
