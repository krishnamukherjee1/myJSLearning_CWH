/*
Parameters
- string: The string to be parsed.
- radix (optional): The base of the numeral system to be used. It can be any integer between 2 and 36.

Return Value
The function returns an integer parsed from the given string. If the string cannot be parsed to an integer, NaN (Not a Number) is returned.

Examples

console.log(parseInt("10"));  // Output: 10
console.log(parseInt("10", 10));  // Output: 10
console.log(parseInt("10", 16));  // Output: 16
console.log(parseInt("A", 16));  // Output: 10
console.log(parseInt("A"));  // Output: NaN
console.log(parseInt("10a"));  // Output: 10
console.log(parseInt("a10"));  // Output: NaN


Important Notes
- If the radix parameter is not specified, JavaScript assumes the following:
- If the string starts with "0x", it's hexadecimal (base 16).
    - If the string starts with "0", it's octal (base 8) in some implementations, but this is not standardized and can lead to inconsistent results. It's generally recommended to specify the radix.
    - Otherwise, it's decimal (base 10).
    - The function stops parsing when it encounters a character that cannot be part of the number in the specified radix. If the first character cannot be converted to a number, NaN is returned.
*/


console.log("Int representation of 'A' base-16 is: ",parseInt('A',16))
console.log("Int representation of 176 base-10 is: ",parseInt(176,10))
console.log("Int representation of 543 base-8 is: ",parseInt(543,8))
console.log("Int representation of 1001 base-2 is: ",parseInt(1001,2))
console.log("Int representation of 1001 base-2 is: ",Number.parseInt(1001,2))

console.log(parseInt("10"));  // Output: 10
console.log(parseInt("10", 10));  // Output: 10
console.log(parseInt("10", 16));  // Output: 16
console.log(parseInt("A", 16));  // Output: 10
console.log(parseInt("A"));  // Output: NaN
console.log(parseInt("10a"));  // Output: 10
console.log(parseInt("a10"));  // Output: NaN