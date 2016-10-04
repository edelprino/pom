var daemonize  = require('daemonize2')

module.exports = function() {

  this.start = function(environment) {
    timer = daemonize.setup(new Configuration(environment))
    timer.start()
  }

  this.stop = function() {
    timer = daemonize.setup(new Configuration(environment))
    timer.stop()
  }

  this.status = function() {
    timer = daemonize.setup(new Configuration(environment))
    return timer.status();
  }
}

Configuration = function(environment) {
  var DEFAULT_ENVIRONMENT = 'default'

  return {
      main: './bin/timer.js',
      name: 'pom',
      pidfile: '/tmp/pom.pid',
      argv: environment || DEFAULT_ENVIRONMENT,
      silent: true
  }
}
