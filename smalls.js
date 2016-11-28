#!/usr/bin/env node

import pkg from '../package.json'
import program from 'commander'

const app = program
  .version(pkg.version)
  .command('setup', 'Configure your CLI credentials')
  .command('deploy', 'Manage deployments')
  .command('creds', 'Manage credentials for HMA services')

app.parse(process.argv)

// Error check for bad commands
const commandExists = app.commands.some(cmd => cmd._name == app.args[0])
if (app.args[0] && !commandExists) {
  throw new Error('command not found')
  app.outputHelp()
}
