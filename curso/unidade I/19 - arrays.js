/**
 * const descreve uma variável que não pode ser reatribuída (com o 
 * operador de atribuição = ).
 * 
 * Quando usamos const com tipos primitivos, esse valor nunca mais
 * poderá ser alterado. Nesse caso, além de const não permitir 
 * reatribuição, o valor também é imutável (consequentemente, nunca 
 * podemos alterar essa constante).
 * 
 * Já quando usamos const com valores mutáveis (como arrays e objetos), 
 * a variável continua sendo constante, porém os valores dentro do objeto 
 * poderão ser alterados. Isso acontece porque quando alteramos um valor 
 * interno de um objeto, não ocorre a reatribuição da variável com sinal 
 * de atribuição = (a variável continua apontando para o mesmo local na 
 * memória), apenas a alteração de um valor interno do mesmo objeto.
 */

const lista = ['Luiz', 'Maria', 'João'];

console.log(lista);

console.log(lista[1]);

console.log(lista.length);

lista[0] = 'Eduardo'; // -> altera

lista[3] = 'Luiza' // -> adiciona

lista[lista.length] = 'Luana' // -> adiciona no fim 

console.log(lista.push('Samanta')); // -> adiciona no fim 

console.log(lista.unshift('Samanta')); // -> adiciona no inicio 

console.log(lista.pop()); // -> remove do fim e retorna valor removido

console.log(lista.shift()); // -> remove do inicio e retorna valor removido

delete lista[1]; // remove sem alterar os indices

console.log(lista);

console.log(lista.slice(0,3));

console.log(lista instanceof Array);