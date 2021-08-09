// solution 1: This is a native approach so, time complexity of this is O(N^2)
const square = (arr1, arr2) => {
    if(arr1.length != arr2.length)
        return false
    for(let i = 0 ; i < arr1.length ; i++){
        let index = arr2.indexOf(arr1[i] ** 2) //indexOf is running a loop in itself
        if(index == -1)
            return false
        arr2.splice(index,1)
    }
    return true
}

let arr1 = [1,2,3,2]
let arr2 = [4,9,1,4]

console.log(square(arr1, arr2))

