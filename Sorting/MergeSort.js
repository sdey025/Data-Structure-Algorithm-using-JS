const merge = (l,r) => {
    let res = []
    left = 0
    right = 0

    while(left < l.length && right < r.length){
        if(l[left] < r[right]){
            res.push(l[left])
            left++
        }
        else{
            res.push(r[right])
            right++
        }
    }
    if(left == l.length){
        while(right < r.length){
            res.push(r[right])
            right++
        }
    }
    if(right == r.length){
        while(left < l.length){
            res.push(l[left])
            left++
        }
    }
    return res
}

const mergeSort = (arr) => {
    if(arr.length <= 1)
        return arr
    
    let mid = Math.floor(arr.length/2)
    let l = arr.slice(0,mid)
    let r = arr.slice(mid)
    return merge(
            mergeSort(l),
            mergeSort(r)
            )
}

let arr = [4,3,6,1,7,8,9,12]

console.log(mergeSort(arr))