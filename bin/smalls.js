#!/usr/bin/env node

const pkg =  require('../package.json')
const program = require('commander')

const app = program
  .version(pkg.version)
  .command('cherrypr', 'Make and PR a new branch which is origin/master + latest commit of the active branch')
  .command('safereset [name]', 'Reset hard to master, after committing and saving the latest into a new backup branch')
  .parse(process.argv)

module.exports = app
