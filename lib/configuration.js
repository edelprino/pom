var fs = require('fs');


module.exports = function() {
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
        var configurationPath = process.env.HOME + '/.pom.yml';
        if (!fs.existsSync(configurationPath)) {
            var standardConfigurationPath = __dirname + '/../.pom.yml';
            var content = fs.readFileSync(standardConfigurationPath);
            fs.writeFileSync(configurationPath, content);
        }
        return require('yamljs').load(configurationPath);
    }
};
