var yml = require('yamljs');

exports.Setup = function(ymlFile) {
    this.setup = yml.load(ymlFile);

    this.get = function(action) {
        action = action == null ? 'default' : action;
        return this.setup[action];
    }
}
