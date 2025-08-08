// Practice problem 1
// Create a variable of string type and add number to it
console.log("--Q1--")
let var1 = 43
console.log(var1 , typeof(var1))
var1 = var1 + " Krishna" 
console.log(var1 , typeof(var1))

// 2. create a const object change it to hold a number later
console.log("\n--Q2--")
const obj1 = {
    Name: "Krishna",
    Regular: true,
    Code: 158,
    Completed: undefined
}
console.log(obj1)
console.log(typeof(obj1))
//obj1 = 42 // const variables can not be re-valued
// But if we initialise an const object, we can alter/add the key / values
obj1.Student = true
console.log(obj1)
console.log(typeof(obj1))

// 3. Try to add a new key: value to the object ___ It is possible
console.log("\n--Q3--")
obj1['Roll'] = 14
obj1['Dept'] = "CSE"
obj1['RegdNo'] = 19
console.log(obj1)

const dict = {
    car: "A Vehicle",
    eagle: "A creature",
    apple: "A Fruit"
}
console.log(dict)
// We can also alter the key value pairs
dict['eagle'] = "A bird"
dict.whale = "A Mammal"
console.log(dict)