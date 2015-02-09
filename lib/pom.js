var exec = require('child_process').exec;

function execute(commands) {
    commands.forEach(function(command){
        exec(command);
    });
}

function inMilliseconds(minutes) {
    return minutes * 60 * 1000;
};

module.exports.run = function(duration, commands) {
    execute(commands.start);
    setTimeout(function() {
        execute(commands.end);
        process.exit(0);
    }, inMilliseconds(duration));
};
