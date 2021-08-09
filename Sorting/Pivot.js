const swap = (arr,swapInd,i) => {
    let temp = arr[swapInd]
    arr[swapInd] = arr[i]
    arr[i] = temp
}
const pivot = (arr) => {
    let start = 0
    let pInd = start
    let swapInd = 0

    for(let i = 0+1 ; i < arr.length ; i++){
        if(arr[pInd] > arr[i]){
            swapInd++
            swap(arr,swapInd,i)
        }
    }
    swap(arr,start,swapInd)
    return arr
}

let arr = [7,3,6,1,4,8,9,12]

console.log(pivot(arr))