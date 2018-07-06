const BigNumber = require("bignumber.js");
function ProductSansN(n) {
  let r = new BigNumber(1), z = null;
  for (let i = 0; i < n.length; i++) {
    if (n[i] === 0 && z === null) {z = [i]}
    else if (n[i] === 0) {return Array.from({length: n.length}, x => "0")}
    else {r = r.times(new BigNumber(n[i]))}
  }
  if (z) {
    let a = Array.from({length: n.length}, x => "0");
    a[z[0]] = r.toString(10);
    return a;
  }
  return n.map(x => r.dividedBy(new BigNumber(x)).toFixed(0));
}