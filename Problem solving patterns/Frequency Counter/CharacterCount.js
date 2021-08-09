const count = () => {
    let name = "Mercury"
    let lower = name.toLowerCase()
    let myobj = {}
    for(let i = 0 ; i < lower.length ; i++){
        let char = lower.charAt(i)
        if(myobj[char])
            myobj[char]++
        else
            myobj[char] = 1
    }
    return myobj
}
console.log(count())