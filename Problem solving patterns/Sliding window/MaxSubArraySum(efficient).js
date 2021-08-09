//Time complexity = O(N)
const MaxSubArraySum = (arr, num) => {
    let maxSum = 0
    let tempSum = 0 
    if(arr.length < num)
        return false
    
    for(let i = 0 ; i < num ; i++){
        tempSum += arr[i] 
    }
    maxSum = tempSum
    for(let i = num ; i < arr.length ; i++){
        tempSum = (tempSum - arr[i - num]) + arr[i]
        if(maxSum < tempSum)
            maxSum = tempSum
    }
    return maxSum
}
let arr = [4,3,6,4,2,7,6,9,2,1]
let num = 3
console.log(MaxSubArraySum(arr,num))