//Time complexity = O(N^2)
const maxSubArray = (arr,num) => {
    if(arr.length < num)
        return false
    let max = 0
    for(let i = 0 ; i < arr.length - num + 1 ; i++){
        let temp = 0
        for(let j = 0 ; j < num ; j++){
            temp += arr[i+j]
        }
        if(max < temp)
            max = temp
    }
    return max
}

let arr = [4,3,6,4,2,7,6,9,2,1]
let num = 3
console.log(maxSubArray(arr,num))