// convert {{titlecase "some-string"}} to "Some String"
module.exports = phrase => {
  return phrase
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};