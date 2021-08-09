const anagram = (s1,s2) => {
    let s1_wout_space = s1.trim()
    let s2_wout_space = s2.trim()
    let s1_lower = s1_wout_space.toLowerCase()
    let s2_lower = s2_wout_space.toLowerCase()
    let obj1 = {}
    let obj2 = {}
    let s1_arr = [...s1_lower]
    let s2_arr = [...s2_lower]

    for(let val of s1_arr)
        obj1[val] = (obj1[val] || 0) + 1
    
    for(let val of s2_arr)
        obj2[val] = (obj2[val] || 0) + 1
    
    for(let key in obj1){
        if(!(key in obj1))
            return false
    
        if(obj1[key] !== obj2[key])
            return false
    }
    return true
}

let s1 = "   raja    "
let s2 = "ajar"

console.log(anagram(s1,s2))