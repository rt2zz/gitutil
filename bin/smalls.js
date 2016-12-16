#!/usr/bin/env node

const pkg =  require('../package.json')
const program = require('commander')

console.log('RUN SMALLS')

const app = program
  .version(pkg.version)
  .command('cherrypr [name]', 'Make and PR a new branch which is origin/master + latest commit of the active branch').alias('cp')
  .command('reset-soft-master', 'Reset hard to master, after committing and saving the latest into a new backup branch').alias('rsm')
  .command('reset-hard-master', 'Hard reset to master').alias('rhm')
  .command('clean', 'Delete all local smalls-backup-* branches')
  .command('delete-local-only-branches', 'Delete all local branches that do not have an identically named remote')
  .parse(process.argv)
