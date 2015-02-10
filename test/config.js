var assert = require('assert');
var config = require('../lib/exec');

describe('exec.js', function(){

    it('should return ', function(){
        duration = config().duration;
        assert.equal(25, duration);
    });
});
