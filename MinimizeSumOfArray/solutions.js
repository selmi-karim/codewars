function minSum(arr) {
  arr.sort((x,y)=>x-y)
  s=0
  while(arr.length)s+=arr.pop()*arr.shift()
  return s
}
