const reverse = (num,rev) => {
    if(num == 0)
        return rev
    let last = num%10
    rev = (rev * 10) + last
    num = num/10
    num = Math.floor(num)
    return reverse(num,rev) 
}

let num = 1123
let rev = 0
console.log(reverse(num, rev))