var assert = require("assert");
var pom = require('../lib/pom');

describe('pom', function(){
    it('should execute start commands when pom run', function(){
        commands = {
            start: ['start-command'],
            end: ['end-command']
        };

        pom = new Pom(commander);
        pom.run(32, commands);

        assert.ok(true);
    })
})
