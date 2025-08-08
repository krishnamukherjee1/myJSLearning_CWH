// 1. Truthy, Falsy & Conditional Evaluation
console.log("-----Truthy, Falsy & Conditional Evaluation-----")
// Falsy checks
if (false) console.log("won't run");
if (0) console.log("won't run");
if ("") console.log("won't run");
if (null) console.log("won't run");
if (undefined) console.log("won't run");
if (NaN) console.log("won't run");
console.log()

// Truthy checks
if (1) console.log("1 is truthy");
if ("0") console.log("\"0\" is truthy"); // string "0" is non-false
if ([]) console.log("[] is truthy");
if ({}) console.log("{} is truthy");
if (function(){}) console.log("functions are truthy");
if (new Date()) console.log("Date object is truthy");
console.log()

// Conditional with default using ||l
console.log("-----Conditional with default using ||l-----");
const userInput = "";
const display = userInput || "Default";
console.log(display); // "Default"
console.log()

// Problem when valid falsy
console.log("-----Problem when valid falsy-----")
const quantity = 0;
const qty = quantity || 10;
console.log(qty); // 10 → lost intended 0 value 
console.log()

// Better with nullish coalescing
console.log("-----ConditBetter with nullish coalescing-----")
const quantity2 = 0;
const qty2 = quantity2 ?? 10;
console.log(qty2); // 0
console.log()

// Short-circuit behavior
console.log("---Short-circuit behaviort using ||-----")
function log() { console.log("called"); return true; }
console.log(false && log()); // skipped
console.log(true || log());  // skipped
console.log()

// Explicit boolean conversion
console.log("-----ConExplicit boolean conversion-----")
console.log(Boolean(""));   // false
console.log(!!{});          // true
console.log()

// Loosely comparing truthy values
console.log("-----ConditiLoosely comparing truthy values-----")
console.log([] == false);  // true—quirky type coercion 
console.log()