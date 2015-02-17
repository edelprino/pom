
exports.Launcher = function (commands, executor) {
    commands = commands || [];
    executor = executor || function(){};
    return function() {
        commands.forEach(executor);
    };
}
