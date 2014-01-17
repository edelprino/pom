execute = function(commands) {
    commands.forEach(function(command){
        require('child_process').exec(command);
    });
};

milliseconds = function(minutes) {
    return minutes*60*1000;
};

setup = function() {
    ambient = process.argv[2];
    config = require('yamljs').load(process.env.HOME + '/.pom.yml');
    return {
        duration: config.duration[ambient],
        commads: {
            start: config.event[ambient].start,
            end: config.event[ambient].end
        }
    };
};

execute(setup().commads.start);
setTimeout(function(){
    execute(setup().commads.end);;
    process.exit(0);
}, milliseconds(setup().duration));
