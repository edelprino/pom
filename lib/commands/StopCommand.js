module.exports = function(timerFactory) {
    return function(){
        var timer = timerFactory.build()
        timer.stop()
        console.log('pomodoro stop')
    }
}
