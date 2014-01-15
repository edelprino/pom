var exec   = require('child_process').exec;
var yml    = require('yamljs');
var config = yml.load(process.env.HOME + '/.pom.yml');

var pomodoro_duration = config.duration.pomodoro;

setTimeout(function(){
    config.event.pomodoro_ended.forEach(function(command){
        exec(command);
    });
    process.exit(0);
}, pomodoro_duration*60*1000);
