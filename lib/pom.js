exports.Pomodoro = function(minutes, start, end) {
    this.minutes = minutes;
    this.start = start;
    this.end = end;

    this.run = function(){
        this.start();
        setTimeout(this.end, this.minutes.inMilliseconds());
    }
}

exports.Minutes = function(minutes) {
    this.minutes = minutes;

    this.inMilliseconds = function() {
        return this.minutes * 60 * 1000;
    }
}

