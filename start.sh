#!/bin/bash

# Could factor some of this out into an env.sh
# to share with deploy.sh
export MIX_ENV=prod
export PORT=4801

CFGD=$(readlink -f ~/.config/bulls_and_cows)

if [ ! -e "$CFGD/base" ]; then
    echo "Need to deploy first"
    exit 1
fi

SECRET_KEY_BASE=$(cat "$CFGD/base")
export SECRET_KEY_BASE

echo "Stopping old copy of app, if any..."

_build/prod/rel/bulls_and_cows/bin/bulls_and_cows stop || true

echo "Starting app..."

_build/prod/rel/bulls_and_cows/bin/bulls_and_cows start