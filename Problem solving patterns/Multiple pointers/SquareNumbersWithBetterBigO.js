//Solution 2: Using objects to reduce time complexity

const square2 = (arr3,arr4) => {
    let frequencyCount1 = {}
    let frequencyCount2 = {}

    for(let val of arr3)
        frequencyCount1[val] = (frequencyCount1[val] || 0) + 1
    for(let val of arr4)
        frequencyCount2[val] = (frequencyCount2[val] || 0) + 1

    for(let key in frequencyCount1){
        if(!(key**2 in frequencyCount2))
            return false
        
        if(frequencyCount2[key**2] !== frequencyCount1[key])
            return false
    }
    return true
}

let arr3 = [1,2,3,2]
let arr4 = [4,9,1,4]


console.log(square2(arr3, arr4))