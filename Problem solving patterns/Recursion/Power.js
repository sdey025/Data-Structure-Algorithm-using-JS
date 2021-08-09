const calculatePower = (number, power) => {
    let product = 1
    const helper = (number, power) => {
        if(power == 0)
            return
        product *= number
        power--
        return helper(number,power)
    }
    helper(number, power)
    return product
}

let number = 5
let power = 3

console.log(calculatePower(number,power))