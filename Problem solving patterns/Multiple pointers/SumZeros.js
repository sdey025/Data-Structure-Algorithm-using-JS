//Time Complexity = O(N^2)
const sumZero = (arr1) => {
    for(let i = 0 ; i < arr1.length ; i++){
        for(let j  = i + 1 ; j < arr1.length ; j++){
            if(arr1[i] + arr1[j] == 0){
                return [arr1[i], arr1[j]]
            }
        }
    }
    return false
}

let arr1 = [-3,-2,-1,1,2,4]

console.log(sumZero(arr1))