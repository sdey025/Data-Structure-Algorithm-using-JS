const binarySearch = (arr,toFind) => {
    let left = 0
    let right = arr.length - 1
    // let flag = false
    let index = -1
    while(left <= right){
        let middle =  parseInt(left + (right - left)/2)

        if(toFind > arr[middle]){
            left = middle + 1
            console.log("left: ",left)
        }
        else{
            right = middle - 1
            console.log("Right: ",right)
        }
        if(toFind == arr[middle]){
            index = middle
            break
        }
    }
    return index
}

let arr = [1,2,4,5,6,7,8,9,11,22,44,54,61,78,89,98,110]
let toFind = 10
console.log(binarySearch(arr,toFind))