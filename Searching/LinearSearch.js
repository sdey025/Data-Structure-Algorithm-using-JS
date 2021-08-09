const linearSearch = (arr,toFind) => {
    let res
    let flag = false
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] == toFind){
            res = i
            flag = true
        }
            
    }
    if(flag)
        return res
}

let arr = [1,2,4,42,33,1,34,3,65,7,5,47,33,423,11,21,18]
let toFind = 7
console.log(linearSearch(arr,toFind))