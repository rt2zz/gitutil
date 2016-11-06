#! /usr/bin/env node

var execSync = require('child_process').execSync

let lastCommit = execSync(`git rev-parse HEAD`)
let currentBranch = execSync(`git rev-parse --abbrev-ref HEAD`)
let newBranch = Math.floor(Math.random()*999999999).toString(36)

console.log('INFO', lastCommit, currentBranch, newBranch)

console.log('## fetch')
execSync(`git fetch`, {stdio: [0, 1, 2]})
console.log('## checkout new branch')
execSync(`git checkout -b ${newBranch} origin/master`, {stdio: [0, 1, 2]})
console.log('## cherry pick last commit')
execSync(`git cherry-pick ${lastCommit}`, {stdio: [0, 1, 2]})
console.log('## push new branch')
execSync(`git push origin ${newBranch}`)
console.log('## pr new branch')
execSync(`hub pull-request`, {stdio: [0, 1, 2]})
console.log('## checkout original branch')
execSync(`git checkout ${currentBranch}`, {stdio: [0, 1, 2]})
