#! /usr/bin/env node

const execSync = require('child_process').execSync
const name = require('./utils/name')

const program = require('commander')

execSync(`git fetch origin master`, {stdio: [0, 1, 2]})
execSync(`git reset --hard origin/master`, {stdio: [0, 1, 2]})
