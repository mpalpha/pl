module.exports = function(value, test, options) {
  return value === test ? options.fn(this) : options.inverse(this);
};
