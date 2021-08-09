const fact = (num) => {
    let total = 1
    for(let i = num ; i > 1 ; i--)
        total *= i
    return total
}

let num = 5

console.log(fact(num))