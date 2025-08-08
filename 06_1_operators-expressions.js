// -------Operators and Expressions-------
console.log("-------Operators and Expression-------\n")
// 1. Arithmetic operators 
// (+, -, *, /, %, += , -=, *=  /=)
// 1️⃣ Arithmetic Operators
let x = 5, y = 2;
console.log(x + y);    // 7
console.log(x - y);    // 3
console.log(x * y);    // 10
console.log(x / y);    // 2.5
console.log(x % y);    // 1
console.log(++x, x++); // 6 6, then x becomes 7
console.log()
// Increment Operator
let num0 = 5
console. log( "num0 = ", num0)           // print = 5  ----  value = 5
console. log( "++num0 = ", ++num0)      // value = 5 -> 6   print = 6    
console. log( "num0++ = ", num0++)      // print = 6        value = 6 -> 7
console. log( "--num0 = ", --num0)     // value = 7 -> 6   print = 6        
console. log( "num0-- = ", num0-- )     // print = 6        value = 6 -> 5
console. log( "num0 = ", num0)           // print = 5  ----  value = 5


// 2️⃣ Comparison Operators
console.log("-------Comparison Operator-------\n")
console.log("-------Equality-------\n")
console.log(5 === "5");    // false (strict equality with type checking)
console.log(5 == "5");     // true (Equality checking)
console.log(5 != 5);      // false
console.log(5 != 6);      // true
console.log(5 !== "5");   // true – strict not equal
console.log(null == undefined); // true, but null === undefined is false
console.log(null === undefined); // null === undefined is false

console.log("-------Comparison-------\n")
console.log(5 > 3, 5 <= 5);// true, true
// Comparison with type conversion
console.log("2" < "12");   // false (lexical comparison)
console.log("2" < 12);     // true (numeric conversion)
console.log("12" < 13);     // true (numeric conversion)
console.log()

// 2.1 Short‑circuit evaluation
console.log("-------Short-circuit evaluation-------\n")
function expensive() {
  console.log("computed");
  return true;
}
console.log(1)
console.log(false && expensive()); // no "computed" — short‑circuited ( skipped )
console.log(2)
console.log(true && expensive()); // yes "computed" — no short‑circuit
console.log(3)
console.log(true || expensive()); // no "computed" — short‑circuited ( skipped )
console.log(4)
console.log(false || expensive()); // yes "computed" — no short‑circuit


// 3️⃣ Logical Operators
console.log("-------Logical Operator-------\n")
// Logical AND
console.log(true && true);      // true
console.log(true && false);     // false
console.log(false && false);    // false
console.log(false && false);    // false
// Logical OR
console.log(true && true);      // true
console.log(true && false);     // true
console.log(false && false);    // true
console.log(false && false);    // false
// Logical NOT
console.log(!true);         // false—and returns boolean values
console.log(!false);         // true—and returns boolean values
console.log()

// 4️⃣ Conditional/Ternary Operator ( Short-hand if-else )
console.log("-------Conditional / Ternary Operator-------\n")
let age = 25;
const adultDrink = age >= 21 ? "Beer" : "Juice";

age = 18;
const kidsDrink = age < 21 ? "Juice" : "Beer";
console.log(kidsDrink); // "Juice"
console.log(adultDrink); // "Beer"
console.log()

// 5️⃣ Nullish Coalescing (??) & Optional Chaining (?.)
console.log("-------Nullish Coalescing (??) & Optional Chaining (?.)-------\n")
let name = null;
console.log(name ?? "Guest"); // "Guest"
const user = {};
console.log(user?.profile?.email); // undefined—no error
console.log()

// 6️⃣ Comma Operator
console.log("-------Comma Operator-------\n")
let num6 = (1, 2, 3, 4);
console.log(num6); // 4, last entered value is taken into consideration
console.log()

/*
================================================================================
🧩 Conditionals: if / else if / else / switch
================================================================================
*/

// if / else example
let num = 0;
if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
} // "Zero" :contentReference[oaicite:8]{index=8}

// switch example
const grade = "B";
switch (grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
  case "C":
    console.log("Well done");
    break;
  case "D":
    console.log("You passed");
    break;
  default:
    console.log("Invalid grade");
}


// Exponent operator ('**')
let num1 = 5
let num2 = 3
// String Concatenation
// Variables retain their datatype
console.log("5 raised to the power 3: ", num1**num2)
// The whole concatenation appears to be num0 string
console.log("5 raised to the power 3: " + num1**num2)

// Comparison operator
// '==' & '!=' compares only the value
// '===' & '!==' compares the value as well as data type

// Logical operators operate on boolean value
// '&&' , '||' , '!'

// Relational Operator
// ( >, <, >=, <=)

// Ternary Operator ('?')
let c = ( 10 > 5) ? 10 : 5;
console.log("Greater is: ", c)