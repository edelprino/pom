var fs = require('fs')
var Enviroment = require('./configuration')
var env = new Enviroment()

execute = function(commands) {
    commands.forEach(function(command){
        require('child_process').exec(command)
    })
}

milliseconds = function(minutes) {
    return minutes*60*1000
}

var generateSetup = function() {
    var ambient = process.argv[2]
    console.log(ambient)
    var config = env.properties()
    return {
        duration: config.duration[ambient],
        commands: {
            start: config.commands[ambient].start,
            stop: config.commands[ambient].stop,
            end: config.commands[ambient].end
        }
    }
}

var setup = generateSetup()

execute(setup.commands.start)

setTimeout(function(){
    execute(setup.commands.end)
    process.exit(0)
}, milliseconds(setup.duration))

process.once("SIGTERM", function() {
    execute(setup.commands.stop)
})
