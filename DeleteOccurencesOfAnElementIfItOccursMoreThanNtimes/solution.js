function deleteNth(arr,n){
    let num = [];
    let res = []
    arr.forEach(element => {
    if (typeof num[element]==='undefined') num[element] = 0
    if(num[element]<n) res.push(element)
        num[element]++;
    })
    console.log('res: '+res)
    return res
}
