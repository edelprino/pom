var daemonize  = require('daemonize2')

module.exports = function() {

  this.start = function(environment) {
    timer = daemonize.setup(new Configuration(environment))
    timer.start()
  }

  this.stop = function() {
    timer = daemonize.setup(new Configuration())
    timer.stop()
  }

  this.status = function() {
    timer = daemonize.setup(new Configuration())
    return timer.status();
  }
}

Configuration = function(environment) {
  return {
      main: './bin/timer.js',
      name: 'pom',
      pidfile: '/tmp/pom.pid',
      argv: environment || 'default',
      silent: true
  }
}
