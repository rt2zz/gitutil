#! /usr/bin/env node

const execSync = require('child_process').execSync

execSync(`git branch | grep -Eo 'smalls.*' | xargs git branch -d`, {stdio: [0, 1, 2]})
