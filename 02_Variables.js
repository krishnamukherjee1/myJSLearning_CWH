// Variables in JS
// JS is a dynamically typed language ; we can change data type of variable during run time

// Data type of variable need not be specified while declaration


//-------------------------------------------------------------------------------//
//--------------------------'var' is block scoped -------------------------------//
//-------------------------------------------------------------------------------//
var num1 = 1
// 'num1' is the identifier 
// '=' is the assignment operator
// '1' is the literal value


//-------------------------------------------------------------------------------//
//--------------------------'let' is block scoped -------------------------------//
//-------------------------------------------------------------------------------//
let num2 = 2
console.log(num1);
console.log(num2);

//---------------------------------------------------------------------------------------------------------------------------//
/* L:03 - Let vs Var vs Const in JS */
//---------------------------------------------------------------------------------------------------------------------------//

// 'var' is globally scoped
var num3 = 3
var str1 = "Krishna"
var str1 = 'Krishna'
var nullValue = null
var undefinedValue = undefined
var char1 = 'a'

// data type can changed depending on the value assigned to the variable
// can be re-valued as well as re-declared
// changes take place globally

console.log();
console.log("---------- var variable ----------");
console.log(num1);
var num1 = 5
console.log(num1);
num1 = 7
console.log(num1);
num1 = "Changed Data type"
console.log(num1);
var num1 = "Re-declared"
console.log(num1);

//-------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------//
// ******************** in general, we use 'let' & 'const' ********************* //
//-------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------//

// 'let' is block scoped
// data type can changed depending on the value assigned to the variable
// changes take place within block scope
// can be re-valued but not re-declared within same block

console.log();
console.log("---------- let variable ----------");
// gets declared in the global scope
let num4 = 4
let str3 = "Krishna"
let str4 = 'Mukherjee'
let nullValue2 = null
let undefinedValue2 = undefined
let char2 = 'a'

// block 1
console.log("---------- block 1 ----------");
console.log(num4);
{
    let num4 = 44
    console.log('Local Scope Value = ',num4);
    
    num4 = 45;
    console.log('Local Scope Value = ',num4);
    
}
console.log("------------------");
console.log('Global Scope Value = ',num4);
num4 = 5; // changing value in global scope
console.log('Global Scope Value = ',num4);


// block 2
{
    console.log("---------- block 2 ----------");
    let num4 = 444
    console.log('Local Scope Value = ',num4);
}

// global scope
console.log("------------------");
console.log('Global Scope Value = ',num4);

num4 = 'Harry'
console.log('Global Scope Value = ',num4);

// we can check the data-type of variable using the 'type-of' function

console.log();
console.log(" Chechking Data type of variables declared");
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


//-------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------//
// 'const'
// const is block scoped
// value need to be assigned while declaring
// can not be re-declared
// can not be re-valued ( no change is allowed for the values assigned )

console.log("----------const variable----------");
const constVar = 1
console.log(constVar)
// constVar = 3 // will throw an error
console.log(constVar)