let names = ["Shivasish", "Raja", "Dey"] 
let occ = ["A4", "Analyst", "Engineer"]

/* 
    Big O of arrays --:
    
        Insertion : It depends
        Removal : It depends
        Searching : o(N)
        Access : O(1)
*/

console.log(names.concat(occ)) // O(N)
console.log(names.slice(0,1)) // O(N)
names.splice(3,0,"GOOD") // O(N)
console.log(names)
names.sort() // O(N * logN)
console.log(names)