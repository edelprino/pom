var config = require('yamljs').load(process.env.HOME + '/.pom.yml');

var duration = config.duration;
var command  = config.event;

execute = function(commands) {
    commands.forEach(function(command){
        require('child_process').exec(command);
    });
};

execute(command.pomodoro.start);

setTimeout(function(){
    execute(command.pomodoro.end);
    process.exit(0);
}, duration.pomodoro*60*1000);

