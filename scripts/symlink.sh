#!/bin/bash
pushd packages/server/public
rm img > /dev/null 
ln -s ../../../private/images img
ln -s ../../../private/fonts fonts
popd
pushd packages/site/config
rm mine.json > /dev/null
ln -s ../../../private/configs/mine.json ./mine.json
popd
