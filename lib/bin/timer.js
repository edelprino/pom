var Environment = require('../Environment')
var environment = new Environment(process.argv[2])

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
}, milliseconds(environment.duration))

process.once("SIGTERM", function() {
    execute(environment.stop)
})
