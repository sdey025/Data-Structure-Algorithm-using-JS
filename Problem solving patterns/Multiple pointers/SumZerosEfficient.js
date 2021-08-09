//Time Complexity = O(N)
const SumZerosEfficient = (arr1) => {
    let left = 0
    let right = arr1.length - 1
    while(left < right){
        let sum = arr1[left] + arr1[right]
        if(sum == 0)
            return [arr1[left],arr1[right]]
        else if(sum > 0)
            right--
        else
            left++

    }
    return false
}

let arr1 = [-4,-2,-1,1,2,3]

console.log(SumZerosEfficient(arr1))