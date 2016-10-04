var yaml = require('yamljs')

module.exports = function(environment) {
    var PATH = process.env.HOME + '/.pom.yml'
    return yaml.load(PATH)[environment]
}

