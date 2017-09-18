/*
   * Use this to turn on logging: (in your local extensions file)
   *
   * Log can also be used in templates: '{{log 0 this "myString" accountName}}'
   * Logs all the passed data when logger.level = 0
   */
// DEBUG: 0, INFO: 1, WARN: 2, ERROR: 3,
// Std level is 3, when set to 0, handlebars will log all compilation results

module.exports = function(level) {
  console.log.apply(
    console,
    [].concat(["Handlebars Log: "], Array.prototype.slice.call(arguments))
  );
};
