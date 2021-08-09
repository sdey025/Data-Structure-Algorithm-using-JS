const insertion = (arr) => {
    for(let i = 1 ; i < arr.length; i++){
        let currVal = arr[i]
        j = i - 1
        while(j >= 0 && arr[j] > currVal){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = currVal 
    }
    return arr
}

let arr = [21,10,6,5,7,3,9,4,2,44,56,43,29]
console.log(insertion(arr))