function sortByBit(arr) {
  // your solution here
  //console.log(arr);
  return arr.sort(compare)
}
function compare(a,b) {
  if (dec2bin(a) < dec2bin(b))
    return -1;
  if (dec2bin(a) > dec2bin(b))
    return 1;
  if (a < b)
    return -1;
  if (a > b)
    return 1;
  return 0;
}

function dec2bin(dec){
    return (dec >>> 0).toString(2).split('1').length;
}

