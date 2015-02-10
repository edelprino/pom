var yml = require('yamljs');

module.exports = function(file) {
    return function(action){
        var config = yml.load(file);
        action = action == null ? 'default' : action;
        return config[action];
    }
}
