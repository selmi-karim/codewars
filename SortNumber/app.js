function solution(nums){
  return nums?nums.sort(function (a, b) {  return a - b;  }):[];     
}
