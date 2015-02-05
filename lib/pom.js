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
        commads: {
            start: config.commands[ambient].start,
            end: config.commands[ambient].end
        }
    };

    function getConfiguration() {
        var fs = require('fs');
        var configurationPath = process.env.HOME + '/.pom.yml';
        if (!fs.existsSync(configurationPath)) {
            var standardConfigurationPath = __dirname + '/../.pom.yml';
            var content = fs.readFileSync(standardConfigurationPath);
            fs.writeFileSync(configurationPath, content);
        }
        return require('yamljs').load(configurationPath);
    }
};

execute(setup().commads.start);
setTimeout(function(){
    execute(setup().commads.end);;
    process.exit(0);
}, milliseconds(setup().duration));
