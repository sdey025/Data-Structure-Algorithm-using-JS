const sumRange = (num) => {
    if(num == 1)
        return 1
    return num + sumRange(num-1)
}
let num = 5

console.log(sumRange(num))