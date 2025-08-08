// 7. Simple & Compound Assignment
let x = 10;
let y = 5;
console.log("------Simple & Compound Assignment------")
x = y + 2;
console.log(x); // 7

x += 3;         // x = x + 3
console.log(x); // 10

x -= 2;         // x = x - 2
console.log(x); // 8

x *= 2;         // x = x * 2
console.log(x); // 16

x /= 4;         // x = x / 4
console.log(x); // 4

x %= 3;         // x = x / 3
console.log(x); // 1

x **= 3;        // x = x ^ 3
console.log(x); // 1 ** 3 = 1

// 8. Shift and Bitwise Assignment
console.log("------Shift and Bitwise Assignment------")
let n = 8;        // 1000 in binary
n <<= 1;          // 00001000 -> 00010000
console.log(n);   // 16

n >>= 2;          // 00001000 -> 00000100
console.log(n);   // 4

n &= 3;           // 00001000 & 00000011 -> 00000000
console.log(n);   // 4 & 3 = 0

n |= 1;           // 00000000 | 00000001 -> 00000001
console.log(n);   // 0 | 1 = 1

n ^= 1;           // 00000001 ^ 00000001 -> 00000000
// x ^ x -> 0 ( Same Input : 0)
// x ^ y -> 1 ( Different input : 1)
console.log(n);   // 1 ^ 1 = 0

// 9. Logical Assignment Operators 
console.log("------Logical Assignment Operatorst------")
let a = 0, b = null, c = 42;

a ||= 5;          // a is falsy → assigned
b ??= 7;          // b is nullish → assigned
c &&= 10;         // c is truthy → assigned

console.log(a, b, c); // 5, 7, 10 :contentReference[oaicite:2]{index=2}
