// primitives and objects ( DATA TYPE )
// there are 7 primitive DT which are fundamentals
// Null, Number, Boolean, BigInt, String, Symbol, Undefined

let a = null                               // null value ( Explicitly ) -> object data type 
let b = 77                                 // number value -> number data type
let c = true                               // boolean data type
let d = BigInt("123")
let e = "krishna"
let f = Symbol("This is a Symbol")
let g = undefined
let h

console.log(a,"\n",b,"\n",c,"\n",d,"\n",e,"\n",f,"\n",g,"\n",h)
console.log("\n--Type of--")
console.log(typeof(a),"\n",typeof(b),"\n",typeof(c),"\n",typeof(d),"\n",typeof(e),"\n",typeof(f),"\n",typeof(g),"\n",typeof(h))


// Non-Primitive DT: Objects in JS
// Objects contain key:value / property/key : value pairs separated by commas
console.log("\n--Object--")
const obj1 = {
    "Name": 'Krishna Mukherjee',
    "Student": true,
    "Working": false,
    "College_Code": 158,
    "Roll": undefined
}
// Printing the whole object
console.log(obj1)
console.log(typeof(obj1))

// printing specific key-> value from object
console.log(obj1["Name"])
console.log(obj1.College_Code)