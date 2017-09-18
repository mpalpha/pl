// Handlebars helper: Contains
// check if a value is contained in an array
module.exports = function(value, array, options) {
  // fallback...
  array = array instanceof Array ? array : [array];
  return array.indexOf(value) > -1 ? options.fn(this) : "";
};
