var assert = require('assert');
var pom = require('../lib/pom');
var nullFunction = function(){}

describe('pom.js', function(){

    it('should convert minutes to milliseconds', function() {
        var oneMinute = new pom.Minutes(1);
        assert.equal(60000, oneMinute.inMilliseconds());

        var tenMinutes = new pom.Minutes(10);
        assert.equal(600000, tenMinutes.inMilliseconds());

        var twentyfiveMinutes = new pom.Minutes(25);
        assert.equal(1500000, twentyfiveMinutes.inMilliseconds());
    })

    it('should execute start() when pomodoro started', function(done) {
        var zeroMinute = new pom.Minutes(0);
        var pomodoro = new pom.Pomodoro(zeroMinute, done, nullFunction);
        pomodoro.run();
    });

    it('should execute end() when pomodoro started', function(done) {
        var zeroMinute = new pom.Minutes(0);
        var pomodoro = new pom.Pomodoro(zeroMinute, nullFunction, done);
        pomodoro.run();
    });
})
