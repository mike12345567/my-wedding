#!/bin/bash
# images to server
pushd packages/server/public > /dev/null
rm -rf img
rm -rf fonts
ln -s ../../../private/images img
ln -s ../../../private/fonts fonts
popd > /dev/null

# site config
pushd packages/site/config > /dev/null
rm -f mine.json
ln -s ../../../private/configs/mine.json ./mine.json
popd > /dev/null

# server env
pushd packages/server > /dev/null
rm -f .env
ln -s ../../private/env/server.env ./.env
popd > /dev/null

# postgres env
pushd packages/server/scripts > /dev/null
rm -f .env
ln -s ../../../private/env/postgres.env ./.env
popd > /dev/null
