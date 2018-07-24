#!/usr/bin/env bash
set -e
# Build site and serve locally

here=$(dirname $0)
( cd $here/src && bundle exec jekyll serve )
