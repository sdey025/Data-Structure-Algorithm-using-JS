const binarySearch = (arr,toFind) => {
    let left = 0
    let right = arr.length - 1
    const helper = (arr,toFind,left,right) => {
        if(left <= right){
            let mid = parseInt((left + right)/2)
            if(arr[mid] == toFind)
                return mid
            if(arr[mid] > toFind)
                return helper(arr,toFind,left,mid-1)
            else
                return helper(arr,toFind,mid+1,right)
            
        }
       return -1
    }
    let res = helper(arr,toFind,left,right)
    return res
}

let arr = [1,2,4,5,6,7,8,9,11,22,44,54,61,78,89,98,110]
toFind = 44
console.log(binarySearch(arr,toFind))