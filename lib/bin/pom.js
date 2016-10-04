var command = require('commander')
var StartCommand = require('../commands/StartCommand')
var StatusCommand = require('../commands/StatusCommand')
var StopCommand = require('../commands/StopCommand')
var Timer = require('../Timer')
var timer = new Timer()

command
    .command('start [environment]')
    .description('start countdown')
    .action(new StartCommand(timer))

command
    .command('status')
    .description('countdown status')
    .action(new StatusCommand(timer))

command
    .command('stop')
    .description('stop countdown')
    .action(new StopCommand(timer))

command.parse(process.argv)

if (!command.args.length) command.help()
