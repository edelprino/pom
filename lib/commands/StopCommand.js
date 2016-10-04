module.exports = function(timer) {
    return function(){
        timer.stop()
        console.log('pomodoro stop')
    }
}
