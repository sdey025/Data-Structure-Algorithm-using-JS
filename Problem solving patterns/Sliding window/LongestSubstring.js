const longestSubstr = (str1) => {
    str1 = str1.trim()
    if(str1.length == 0)
        return false
    str1 = str1.toLowerCase()
    let original_str = []
    original_str = str1.split('')
    let tempArr = []
    let lengthArr = []
    for(let i = 0 ; i < original_str.length ; i++){
        let temp = original_str[i]
        let flag = 0
        for(let j = 0 ; j < tempArr.length ; j++){
            if(tempArr[j] === temp)
                flag = 1
        }
        if(flag != 1){
            let lastIndex = tempArr.length
            tempArr[lastIndex] = temp
        }
        else{
            let ind = lengthArr.length
            lengthArr[ind] = tempArr.length
        }
    }
    lengthArr.sort((a , b) => b - a)
    return [lengthArr[0], lengthArr, tempArr]

}

let str1 = "geeksforgeeks"
console.log(longestSubstr(str1))