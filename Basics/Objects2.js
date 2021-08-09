let obj1 = {
    firstname : "Shivasish",
    lastname : "Dey",
    age : 22,
    profession : "Software Engineer"
}

console.log(obj1)
console.log("Firstname: ",obj1.firstname)
let i
for(let val in obj1){
    console.log(obj1[val])
}