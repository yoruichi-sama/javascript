// IEEE 754-2008 -> padrao para casas decimais no JS.

let num1 = 15;
let num2 = 2.5;

console.log(num1 + num2);

console.log(num1.toString() + num2);

console.log(num1.toString(16)); // base 16 -> representacao hexadecimal

console.log(num2.toFixed(5)); // 5 -> casas decimais

console.log(Number.isInteger(num1)); 

console.log(Number.isNaN(num1*'a'));

let num3 = 0.7;
let num4 = 0.1;

console.log(num3 + num4);

let resp = num3;

resp += num4;
resp += num4;
resp += num4;

console.log(resp);

console.log(parseFloat(resp.toFixed(2)));
console.log(Number(resp.toFixed(2)));