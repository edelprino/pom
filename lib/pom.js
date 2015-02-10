function inMilliseconds(minutes) {
    return minutes * 60 * 1000;
};

module.exports.run = function(duration, commands) {
    commands.start();
    setTimeout(function() {
        commands.end();
        process.exit(0);
    }, inMilliseconds(duration));
};
