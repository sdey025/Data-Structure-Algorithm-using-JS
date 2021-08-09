const swap = (arr,a,b) => {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}
const pivot = (arr,left,right) => {
    let start = left
    let pivotInd = start
    let swapind = left

    for(let i = left + 1 ; i <= right ; i++){
        if(arr[pivotInd] > arr[i]){
            swapind++
            swap(arr,swapind,i)
        }
    }
    swap(arr,swapind,start)
    return swapind
}
const quickSort = (arr,left = 0,right = arr.length - 1) => {
    if(left < right){
        let pivotIndex = pivot(arr,left,right)
        quickSort(arr,left,pivotIndex - 1)
        quickSort(arr,pivotIndex + 1,right)
    }
    return arr
}
let arr = [7,3,6,1,4,8,9,12]

console.log(quickSort(arr))