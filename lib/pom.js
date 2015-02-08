var fs = require('fs');

execute = function(commands) {
    commands.forEach(function(command){
        require('child_process').exec(command);
    });
};

milliseconds = function(minutes) {
    return minutes*60*1000;
};

setup = function() {
    var ambient = process.argv[2];
    var config = getConfiguration();
    return {
        duration: config.duration[ambient],
        commands: {
            start: config.commands[ambient].start,
            stop: config.commands[ambient].stop,
            end: config.commands[ambient].end
        }
    };
};

execute(setup().commands.start);

setTimeout(function(){
    execute(setup().commands.end);
    process.exit(0);
}, milliseconds(setup().duration));

process.once("SIGTERM", function() {
    execute(setup().commands.stop);
});

function getConfiguration() {
    var configurationPath = process.env.HOME + '/.pom.yml';
    if (!fs.existsSync(configurationPath)) {
        var standardConfigurationPath = __dirname + '/../.pom.yml';
        var content = fs.readFileSync(standardConfigurationPath);
        fs.writeFileSync(configurationPath, content);
    }
    return require('yamljs').load(configurationPath);
}
