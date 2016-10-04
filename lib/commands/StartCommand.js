module.exports = function(timer) {
    return function(environment) {
        timer.start(environment)
        console.log('timer start')
    }
}
