function solution(nums){
  //console.log(nums)
  return nums?nums.sort(function (a, b) {  return a - b;  }):[];     
}
