const    dict = {
        0: [0,0,0,0],
        1: [1,1,1,1],
        2: [6,2,4,8],
        3: [1,3,9,7],
        4: [6,4,6,4,],
        5: [5,5,5,5],
        6: [6,6,6,6],
        7: [1,7,9,3],
        8: [6,8,4,2],
        9: [1,9,1,9]
    }

function lastDigit(as){
  console.log(as)
  if (as.length === 0) return 1
  if (as.length === 2 && as[0] === 0 && as[1] === 0) return 1
  
  arr = as.reverse()
  rest = 1
  let result = 0
  let i = 0
  s = arr.reduce((last,next)=> {
    if (last === 0) return 1
    console.log(">> ", last, next)
    rest = last%4
    next=dict[lastD(next)][rest]
    i++
    if (i === arr.length -1) return dict[lastD(next)][rest]
    else return next*dict[lastD(next)][rest]
  })
  console.log("res ", rest,(s))
  return dict[lastD(s)][rest]
}

function lastD(a){
  return a%10;
}
