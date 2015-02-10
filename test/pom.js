var assert = require("assert");
var pom = require('../lib/pom');

describe('pom', function(){
    it('should execute start commands when pom run', function(){
        commands = {
            start: function() {assert.ok(true)},
            end: function() {assert.fail()}
        };
        pom.run(32, commands);
    })

    it('should execute end commands when pom ended', function(done){
        this.timeout(600);
        commands = {
            start: function() {assert.ok(true)},
            end: function() {assert.ok(false);done()}
        };
        pom.run(0.01, commands);
    })

})
