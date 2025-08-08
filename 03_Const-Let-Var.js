// Const-Let-Var in JS

/////////////////////////////////////////////////////////////
/////////////////// var is globally scoped //////////////////
/////////////////////////////////////////////////////////////
var num1 = 3
var str1 = "Krishna"
var str2 = 'Krishna'
var nullValue1 = null
var undefinedValue1 = undefined
var char1 = 'a'

// data type changes depending on the value assigned to the variable
// value assigned can be re-valued as well as re-declared
// changes take place globally

console.log(num1);              // 3
var num1 = 5                    // Declaration / Re-Declaration
console.log(num1);              // 5

num1 = 7                        // Re-Valuation
console.log(num1);              // 7


num1 = "Changed Data type"      // Data Type changed ( Re-Valuation )
console.log(num1);

var num1 = "Re-declared"        // Re-Declaration + Changed Data Type ( Re-Valuation )
console.log(num1);



/////////////////////////////////////////////////////////////
/////// FOR MOST OF THE CASES, WE USE 'let' & 'const' ///////
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
/////////////////// let is local/ block scoped //////////////
/////////////////////////////////////////////////////////////


let num2 = 4
let str3 = "Krishna"
let str4 = 'Krishna'
let nullValue2 = null
let undefinedValue2 = undefined
let char2 = 'a'

// data type changes according on the value assigned to the variable
// changes take place within block scope
// can be re-valued but not re-declared within same block

// block 1
console.log(num2);          // 4
{
    let num2 = 44           // Declared within block ( new instance )
    console.log(num2);      // 44
    num2 = 45;              // Re-valued within block
    console.log(num2);
}

// global scope
num2 = 5                    // Re-valuated within global scope
console.log(num2);          // Global Value accessed -> 5

// block 2
{
    let num2 = 444          // Declared within block ( new instance )
    console.log(num2);      // Local Value accessed -> 444
}

// global scope
console.log(num2);          // Global Value accessed -> 5

// we can check the data-type of variable using the 'type-of' function
val = 'Harry'
console.log(val);

let var1 = 1; // number
console.log(typeof (var1));
var1 = "Krishna" // string
console.log(typeof (var1));
var1 = 'Krishna' // string
console.log(typeof (var1));
var1 = 'k' // string
console.log(typeof (var1));
var1 = null // object
console.log(typeof (var1));
var1 = undefined // undefined
console.log(typeof (var1));


// 'const'
// const is block scoped
// value need to be assigned while declaring
// can not be re-declared
// can not be re-valued ( no change is allowed for the values assigned )

const constVar = 1
console.log(constVar)
// constVar = 3 // will throw an error
console.log(constVar)