var config = require('yamljs').load(process.env.HOME + '/.pom.yml');

var duration = config.duration.pomodoro;
var command  = config.event;

execute = function(commands) {
    commands.forEach(function(command){
        require('child_process').exec(command);
    });
};

milliseconds = function(minutes) {
    return minutes*60*1000;
};

execute(command.pomodoro.start);

setTimeout(function(){
    execute(command.pomodoro.end);
    process.exit(0);
}, milliseconds(duration));

