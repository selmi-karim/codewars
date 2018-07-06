const BigNumber = require("bignumber.js");

function ProductSansN(n) {
  let res = n.reduce(function (accumulator, currentValue) {
  return accumulator * currentValue;
}, 0);
return res
  // your code
}
