var nullFunction = function(){};
var Launcher = require('../lib/launcher').Launcher;


describe('launcher.js', function(){

    it('should work if no commnds or executor are passes', function() {
        Launcher()();
    });

    it('should run commands in commdands array', function(done) {
        var commands = [nullFunction, nullFunction, done];
        var executor = function(command){command();};
        var launch = new Launcher(commands, executor);

        launch();
    });
})
