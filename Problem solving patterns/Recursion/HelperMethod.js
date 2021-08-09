const outer = (arr) => {
    let inner = []
    const helper = (arr) => {
        if(arr.length === 0)
            return
        
        if(arr[0] % 2 != 0)
            inner.push(arr[0])

        helper(arr.slice(1))
    }
    helper(arr)
    return inner
}

let arr = [1,5,3,4,6,7,8,64,2,2,4,79,0,7,5,3,2]

console.log(outer(arr))