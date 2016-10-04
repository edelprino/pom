var command = require('commander')
var StartCommand = require('../commands/StartCommand')
var StatusCommand = require('../commands/StatusCommand')
var StopCommand = require('../commands/StopCommand')
var TimerFactory = require('../TimerFactory')
var factory = new TimerFactory()

command
    .command('start [environment]')
    .description('start pomodoro timer')
    .action(new StartCommand(factory))

command
    .command('status')
    .description('check the status of pomodoro timer')
    .action(new StatusCommand(factory))

command
    .command('stop')
    .description('stop pomodoro timer')
    .action(new StopCommand(factory))

command.parse(process.argv)

if (!command.args.length) command.help()
