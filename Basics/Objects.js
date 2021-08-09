let instructor = {
    firstname : "Shivasish",
    lastname : "Dey",
    isWorking : true,
    favouriteNum : [31,13,43,29,33]
}

/* 
Big O in objects --:
    
    Insertion : O(1)
    Removal : O(1)
    Searching : O(N)
    Accessing : O(1)
*/

// console.log(Object.keys(instructor)) // to see all the variables in the object
// console.log(Object.entries(instructor)) // to see all the variables with values in the object
// console.log(instructor.hasOwnProperty("isWorking")) // return true if the property is exist in the object otherwise false

console.log(instructor.firstname)

/* Here, Object are much faster than anything  because there is no order for anything however arrays are also 
very fast but sometimes their order may slow them down (depending on what we are doing). */

/* 
    Big O of object methods --:
        
        Object.keys - O(N)
        Object.values - O(N)
        Object.entries - O(N)
        hasOwnProperty - O(1)
*/