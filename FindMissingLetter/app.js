function findMissingLetter(array)
{	
	var res = 0;
        array.map(x => x.charCodeAt()).reduce((a,b)=>{if((b-a)==2) {res=a+1;return a};return b})
	return String.fromCharCode(res);
  
}

console.log(findMissingLetter(['O','Q','R','S']));
console.log(findMissingLetter(['a','b','c','d','f']));
