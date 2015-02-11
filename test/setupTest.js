var assert = require('assert');
var Setup = require('../lib/setup').Setup;
var testYmlFile = './test/test.yml';

describe('setup.js', function(){

    it('should return default duration if no actions is specified', function(){
        var setup = new Setup(testYmlFile);
        var defaultSetup = setup.get();
        assert.equal(25, defaultSetup.duration);
    });

    it('should return action duration when action is specified', function(){
        var setup = new Setup(testYmlFile);
        var breakSetup = setup.get('break');
        assert.equal(5, breakSetup.duration);
    });

    it('should return default command array when no actions is specified', function(){
        var setup = new Setup(testYmlFile);
        var defaultSetup = setup.get();
        assert.ok(Array.isArray(defaultSetup.start));
        assert.ok(Array.isArray(defaultSetup.stop));
        assert.ok(Array.isArray(defaultSetup.end));
    });

    it('should return default command array when no actions is specified', function(){
        var setup = new Setup(testYmlFile);
        var breakSetup = setup.get('break');
        assert.ok(Array.isArray(breakSetup.start));
        assert.ok(Array.isArray(breakSetup.stop));
        assert.ok(Array.isArray(breakSetup.end));
    });
})
