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
    var ambient = 'default'
    console.log(ambient)
    return env.properties()[ambient]
}

var setup = generateSetup()

execute(setup.start)

setTimeout(function(){
    execute(setup.end)
    process.exit(0)
}, milliseconds(setup.duration))

process.once("SIGTERM", function() {
    execute(setup.stop)
})
