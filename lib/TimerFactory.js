var daemonize   = require('daemonize2')

module.exports = function() {

  var DEFAULT_ENVIRONMENT = 'default'

  this.build = function(environment) {
    var conf = {
        main: './bin/timer.js',
        name: 'pom',
        pidfile: '/tmp/pom.pid',
        argv: environment || DEFAULT_ENVIRONMENT,
        silent: true
    }
    return daemonize.setup(conf)
  }
}
