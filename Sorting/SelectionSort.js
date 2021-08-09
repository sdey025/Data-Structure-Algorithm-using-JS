const selection = (arr) => {
    let i = 0

    while(i < arr.length){
        let min = i
        for(let k = i + 1 ; k < arr.length ; k++){
            if(arr[min] > arr[k]){
                let temp = arr[min]
                arr[min] = arr[k]
                arr[k] = temp
            }
        }
        i++
    }
    return arr
}

let arr = [21,10,6,5,7,3,9,4,2,44,56,43,29]
console.log(selection(arr))