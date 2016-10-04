module.exports = function(timerFactory) {
    return function(){
        var timer = timerFactory.build()
        var isRunning = timer.status()
        if (isRunning) {
          console.log('todo')
        } else {
            console.log('--:--')
        }
    }
}
