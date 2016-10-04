var moment = require('moment')
var fs = require('fs')
var Environment = require('../Environment')
var environment = new Environment(process.argv[2])
var PATH = process.env.HOME + '/.timer_status'

execute = function(commands) {
    commands.forEach(function(command){
        require('child_process').exec(command)
    })
}

milliseconds = function(minutes) {
    return minutes*60*1000
}

execute(environment.start)

setTimeout(function(){
    execute(environment.end)
    process.exit(0)
    fs.unlink(PATH)
}, milliseconds(environment.duration))

var ended = moment().add(environment.duration, 'm')
setInterval(function() {
  diff = moment.utc(ended.diff(moment())).format("mm:ss")
  fs.writeFile(PATH, diff)
}, 1000)

process.once("SIGTERM", function() {
    execute(environment.stop)
    fs.unlink(PATH)
})
