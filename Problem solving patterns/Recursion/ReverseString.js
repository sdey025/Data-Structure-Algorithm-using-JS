const reverse = (str) => {
    let reverse = ''
    let length = str.length - 1
    const helper = (reverse,str,length) => {
        if(length < 0)
            return reverse
        reverse += str.charAt(length)
        length--
        return helper(reverse,str,length)
    }
    reverse = helper(reverse,str,length)
    return reverse
}

let str = "raja"
console.log(reverse(str))