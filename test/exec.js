var assert = require('assert');
var exec = require('../lib/exec');

describe('exec.js', function(){
    it('should return default duration if no actions is specified', function(){
        duration = config().duration;
        assert.equal(25, duration);
    });
})
