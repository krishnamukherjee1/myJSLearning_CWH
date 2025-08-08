// Conditional Statements
// _______Similar to C, C++ syntax_______ 
// if
// if __ else
// if __ else-if __ else

// Taking Input


const prompt = require("prompt-sync")()
// let a = Number.parseInt(prompt("Enter Number: "))
let a;

// Ternary Operator
a = prompt("Enter Age: ")
a = parseInt(a)                 // Method -I
console.log(a, typeof(a))
console.log("You can", (a>=18)?"Drive":"Not Drive")

// If-Else Conditionals
a = prompt("Enter Age: ")
a = Number.parseInt(a)          // Method - II
console.log(a, typeof(a))
if ( a >= 18 && a<60 ) console.log("Adult")
    else if (a < 18) console.log("Kid")
        else if ( a>=60) console.log("Senior Citizen")



