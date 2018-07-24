#!/usr/bin/env bash
set -e
# Builds site, commits and pushes to Github
# This will push to whatever branch you have checked out in the submodule

if [[ ($# -eq 0) ]]; then
    echo 'Usage: ./deploy.sh "commit message here"'
    exit -1;
fi

here=$(dirname $0)

( cd $here/src && bundle exec jekyll build )

cp $here/src/_site/* -r $here/site

( cd $here/site && git add . && git commit -m "${1}" && git push )
