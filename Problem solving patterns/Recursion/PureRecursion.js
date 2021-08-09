const selectOdds = (arr) => {
    let res = []
    if(arr.length == 0)
        return 0
    
    if(arr[0] % 2 != 0)
        res.push(arr[0])
    
    res = res.concat(selectOdds(arr.slice(1)))
    return res
}

let arr = [1,2,3,4,5]
console.log(selectOdds(arr))