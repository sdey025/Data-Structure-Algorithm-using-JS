const bubble = (arr) => {
    for(let  i = 0 ; i < arr.length ; i++){
        for(let j = 0 ; j < i - 1 ; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

let arr = [21,10,6,5,7,3,9,4,2,44,56,43,29]
console.log(bubble(arr))