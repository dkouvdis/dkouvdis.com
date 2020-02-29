#!/bin/bash

git branch -D gh-pages
git checkout -b gh-pages

yarn build
yarn export

cp -R out/* .

touch .nojekyll

rm -rf pages yarn.lock package.json postcss.config.js \
.prettierrc css components public data bin env-config.js \
.editorconfig

git add --all
git commit -m "gh page build"
git push -f origin gh-pages

git checkout master
