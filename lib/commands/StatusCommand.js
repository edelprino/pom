module.exports = function(timer) {
    return function(){
        var isRunning = timer.status()
        if (isRunning) {
          console.log('todo')
        } else {
            console.log('--:--')
        }
    }
}
