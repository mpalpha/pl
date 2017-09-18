var config = require("../../gulp/gulp.config")();

module.exports = function() {
    return config.theme + "-" + config.assets;
};
