var fs = require('fs')
var yaml = require('yamljs')


function Enviroment() {
    var PATH = process.env.HOME + '/.pom.yml'

    this.properties = function() {
        createIfNotExist()
        return yaml.load(PATH)
    }

    function createIfNotExist() {
        if (!fs.existsSync(PATH)) {
            var template = __dirname + '/../.pom.yml'
            copy(template, PATH)
        }
    }

    function put(from, to) {
        fs.createReadStream(from).pipe(fs.createWriteStream(to))
    }
}

module.exports = Enviroment;
