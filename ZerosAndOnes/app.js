function replaceZero(arr){
  var lastOne =0;
  var result =new Array(arr.length).fill(0);
  for(var i=0;i<arr.length;i++){
    if (arr[i]==0){ 
    result[i] += lastOne
    lastOne=0;
    }
    else lastOne++    
  }
  lastOne=0
  for(var i=arr.length-1;i>=0;i--){
    if (arr[i]==0){ 
    result[i] += lastOne
    lastOne=0;
    }
    else lastOne++    
  }
  console.log(result)
  return result.lastIndexOf(Math.max(...result))
}
