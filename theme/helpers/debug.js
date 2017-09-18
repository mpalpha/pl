module.exports = function(value) {
  return console.log("debug:" + JSON.stringify(value, null, 2));
};
