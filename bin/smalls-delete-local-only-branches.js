#! /usr/bin/env node

const execSync = require('child_process').execSync

execSync(`comm -23 <( git branch | grep -v "/" | grep -v "*" | sort ) <( git branch -r | awk '/origin\/(.*)/' ${1} | sed 's/origin\///' | sort ) | xargs git branch -D`, {stdio: [0, 1, 2]})
