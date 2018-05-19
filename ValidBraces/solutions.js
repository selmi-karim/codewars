function validBraces(parens){
  var length = parens.length / 2;
  
  for (var i = 0; i <= length; ++i) {
    parens = parens.replace('()', '');
    parens = parens.replace('[]', '');
    parens = parens.replace('{}', '');
  }
  
  return parens == '';
}
