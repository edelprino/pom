function inMilliseconds(minutes) {
    return minutes * 60 * 1000;
};

module.exports.run = function(duration, commands) {
    commands.start();
    setTimeout(function() {
        commands.end();
    }, inMilliseconds(duration));
};

module.exports.stop = function(commands) {
    commands.stop();
}
