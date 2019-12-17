#!/usr/bin/env bash

# Run Lint Fix
printf "eslint is watching for file changes\n\n"
./node_modules/.bin/onchange "src/**/*.js" -- ./node_modules/.bin/eslint --fix src &

sleep 2

# Run babel
printf "Babel is watching for file changes\n"
./node_modules/.bin/babel src -d .compiled --verbose --delete-dir-on-start --watch &

sleep 2

# Run nodemon
printf "\nServer Started...Enjoy surfing\n"
nodemon .compiled/index.js
