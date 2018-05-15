function minSum(arr) {
  // your code here
  arr = arr.sort(function(a,b){return a - b});
  var res= 0;
  
  console.log(arr);
  for(var i=0;i<arr.length/2;i++){
    res+=arr[i]*arr[arr.length-1-i]
  }
  return res
}
