/**
 * 
 */

let a = 'A'; // -> B
let b = 'B'; // -> C
let c = 'C'; // -> A

console.log(a, b, c);

let swap = a; // -> A

a = b;      // -> B
b = c;      // -> C
c = swap    // -> A

console.log(a, b, c);

// -------------------------------

a = 'A'; // -> B
b = 'B'; // -> C
c = 'C'; // -> A

console.log(a, b, c);

[a, b, c] = [b, c, a];

console.log(a, b, c);