#! /usr/bin/env node

const execSync = require('child_process').execSync
const name = require('./utils/name')

const program = require('commander')
program.parse(process.argv)
let name = program.args[0]

execSync(`git fetch origin`, {stdio: [0, 1, 2]})
execSync(`git add . -v`, {stdio: [0, 1, 2]})
execSync(`git commit --allow-empty -m "commit working state"`, {stdio: [0, 1, 2]})
execSync(`git branch ${name.backupBranch()}`, {stdio: [0, 1, 2]})
// execSync(`git reset --hard origin/master`, {stdio: [0, 1, 2]})
