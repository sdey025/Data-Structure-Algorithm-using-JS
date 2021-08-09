const merge = (arr,arr1) => {
    let i = 0 
    let j = 0
    let res = []
    while(i < arr.length && j < arr1.length){
        if(arr[i] < arr1[j]){
            res.push(arr[i])
            i++
        }
        else{
            res.push(arr1[j])
            j++
        }
    }
    while(i < arr.length){
        res.push(arr[i])
        i++
    }
    while(j < arr1.length){
        res.push(arr1[j])
        j++
    }

    return res
}

let arr = [1,2,6,8]

let arr1 = [3,4,7]

console.log(merge(arr,arr1))