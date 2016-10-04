module.exports = function(timerFactory) {
    return function(environment) {
        var timer = timerFactory.build(environment)
        timer.start()
        console.log('timer start')
    }
}
