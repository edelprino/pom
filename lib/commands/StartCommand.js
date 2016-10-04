module.exports = function(timer) {
    return function(environment) {
        timer.start()
        console.log('timer start')
    }
}
