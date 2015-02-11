var exec = reuiqr().exec;
var sdadasd = require('../lib/config')(exec);

describe('config.js', function(){

    it('should return default duration if no actions is specified', function(){
        duration = config().duration;
        assert.equal(25, duration);
    });

    it('should return default commands for start, stop and end', function(){
        assert(typeof config().start, 'Object');
        assert(typeof config().stop, 'Object');
        assert(typeof config().end, 'Object');
    });

    it('should return 5 minutes duration for break action', function(){
        duration = config('break').duration;
        assert.equal(5, duration);
    });

    it('should return break commands for start, stop and end', function(){
        assert(typeof config('break').start, 'Object');
        assert(typeof config('break').stop, 'Object');
        assert(typeof config('break').end, 'Object');
    });

    it('should return 15 minutes duration for break action', function(){
        duration = config('longbreak').duration;
        assert.equal(15, duration);
    });
})
