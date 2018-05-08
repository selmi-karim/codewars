
function arithmeticSequenceElements(a,r,n) {
  var ret = [a]
  while (--n) ret.push(a+=r);
  return ret.join(', ')
}
