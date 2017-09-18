const config = require("../gulp/gulp.config")();

module.exports = {
  production: process.env.NODE_ENV === "production",
  config: config,
  assets: config.assets
};
