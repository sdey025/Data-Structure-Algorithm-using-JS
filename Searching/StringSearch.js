const SearchString = (string, toSearch) => {
    let count = 0 
    for(let i = 0 ; i < string.length ; i++){
        for(let j = 0 ; j < toSearch.length ; j++){
            if(string.charAt(i) === toSearch.charAt(j)){
                if(string.charAt(i+1) === toSearch.charAt(j+1) && toSearch.charAt(j+1) !== ''){
                    if(string.charAt(i+2) === toSearch.charAt(j+2) && toSearch.charAt(j+2) !== ''){
                        count++
                    }
                }
            }
        }
    }
    return count
}

let string = "dakjLBkfjjkbasdlkjbafkhbijawebdjfaewnobadbadbadbadbadbadbad"
let toSearch = "bad"

console.log(SearchString(string, toSearch))