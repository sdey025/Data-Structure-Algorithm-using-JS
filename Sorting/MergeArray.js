const merge = (arr,arr1) => {
    let i = 0
    let j = 0
    let temp = []
    const helper = (arr,arr1) => {
        if(arr[i] < arr1[j]){
            temp.push(arr[i])
            i++
        }
        else if(arr[i] > arr1[j]){
            temp.push(arr1[j])
            j++
        }

        if(i == arr.length || j == arr1.length){
            return
        }
        helper(arr,arr1)
    }
    helper(arr,arr1,i,j)
    if(i < arr.length){
        for(let j = i ; j < arr.length ; j++){
            temp.push(arr[j])
        }
    }
    else if(j < arr.length){
        for(let i = j ; i < arr1.length ; i++){
            temp.push(arr1[i])
        }
    }
    return temp
}

let arr = [1,2,6,8]

let arr1 = [3,4,7]

console.log(merge(arr,arr1))