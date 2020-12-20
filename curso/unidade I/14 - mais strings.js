/**
 * 
 */

let texto = 'Yoruichi';

console.log(texto[1]);

console.log(texto.charAt(4));

console.log(texto.concat(' Shihoin', ' - Bleach'));

console.log(texto.indexOf('chi'));

console.log(texto.lastIndexOf('chi', 2));

console.log(texto.match(/[a-z]/g)); // array com o resultado da -> expressão regular

console.log(texto.replace('Yoruichi', 'Shihoin'));

console.log(texto.length);

console.log(texto.slice(0,4));

console.log(texto.substring(5));

console.log(texto.split(''));

console.log(texto.toLocaleUpperCase());