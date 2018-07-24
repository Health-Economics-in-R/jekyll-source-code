This repo contains the Jekyll source code for the HERMES website. 

## Local development

Instructions for installing Jekyll are here: https://jekyllrb.com/docs/usage/

All Jekyll source code is in the `src` folder. To view your changes locally, run `./serve.sh`.

## Deployment

The subdirectory `site` is a git submodule pointing to the organisation's Github page repository (
 https://github.com/Health-Economics-in-R/health-economics-in-r.github.io)
 
We compile locally and deploy the compiled code to that repository so that we can use arbitrary Jekyll 
plugins (unsupported by the Github pages Jekyll builder.) 

To do this in one step, run `deploy.sh` with a commit message
as an argument. This compiles the code, copies it into the `site` folder, commits it with the provided message to
the Github page repo, and pushes it up to Github.

e.g. 

```
./deploy.sh "added blog post"

```

This commits and pushes it straight to the live site, so make sure you've tested it locally first!