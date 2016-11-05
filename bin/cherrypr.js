#! /usr/bin/env node

var execSync = require('child_process').execSync

let lastCommit = execSync(`git rev-parse HEAD`)
let currentBranch = execSync(`git branch`)
let newBranch = Math.floor(Math.random()*999999999).toString(36)

console.log('INFO:', lastCommit, currentBranch, newBranch)
execSync(`git checkout -b ${newBranch} origin/master`, {stdio: [0, 1, 2]})
execSync(`git cherry-pick ${lastCommit}`, {stdio: [0, 1, 2]})
execSync(`git push origin ${newBranch}`)
execSync(`hub pull-request`, {stdio: [0, 1, 2]})
execSync(`git checkout ${currentBranch}`, {stdio: [0, 1, 2]})
