const product = (arr) => {
    let product = 1,i = 0
    let length = arr.length
    const helper = (arr,product,length,i) => {
        if(i == length)
            return product
        product *= arr[i]
        console.log(arr[i])
        i++
        return helper(arr,product,length,i)
    }
    product = helper(arr,product,length,i)
    return product
}

let arr = [1,5,4,7,3,6]
console.log(product(arr))
console.log(arr[11])