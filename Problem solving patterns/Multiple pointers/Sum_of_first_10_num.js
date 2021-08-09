//first approach i.e loop.

const sumwithloop = (n) => {
    let target = 0
    for(let i = 1 ; i <= n ; i++){
        target += i
    }
    return target
}

//second approach i.e formula.

const sum = (n) => {
    return n * (n + 1)/2
}

console.log("\ndoing sum using loop: ",sumwithloop(10))
console.log("\ndoing sum using formula: ",sum(10))