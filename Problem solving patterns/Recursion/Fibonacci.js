const fibo = (length) => {
    let arr = [0,1,1]
    length -= 3
    const helper = (arr,length) => {
        if(length == 0)
            return 
        let num1 = arr[arr.length - 1]
        let num2 = arr[arr.length - 2]
        sum = num1 + num2
        arr.push(sum)
        length--
        return helper(arr,length)
    }
    helper(arr,length)
    return arr
}

let length = 10
console.log(fibo(length))