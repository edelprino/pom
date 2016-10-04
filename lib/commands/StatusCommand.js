var fs = require('fs')
module.exports = function(timer) {
    return function(){
        var isRunning = timer.status()
        if (isRunning) {
          var PATH = process.env.HOME + '/.timer_status'
          console.log(fs.readFileSync(PATH).toString())
        } else {
            console.log('--:--')
        }
    }
}
