//time complexity = O(N)
const uniqueValues = (arr) => {
    let i = 0
    let j = i+1
    let count  = 1
    while(j < arr.length){
        if(arr[i] != arr[j]){
            i = i + 1
            arr[i] = arr[j]
            j++
            count++
        }
        else{
            j++
        }
    }
    return count
}

let arr = [1,1,1,2,3,3,3,4,4,5,6,7,8,8,8,9,9]

console.log(uniqueValues(arr))