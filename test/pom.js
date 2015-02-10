var assert = require("assert");
var pom = require('../lib/pom');

describe('pom', function(){

    it('should execute start() when pomodoro started', function(done){
        var commands = {
            start: function() {done()},
            end: function() {}
        };
        pom.run(0, commands);
    });

    it('should execute end() when pomodoro ended', function(done){
        var commands = {
            start: function() {},
            end: function() {done()}
        };
        pom.run(0, commands);
    });
})
