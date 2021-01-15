/**
 * ... -> spreed, espalha objeto original em um novo objeto. (cópia)
 * Objects.values -> retorna valores
 * Objects.entries -> retorna um array de arrays com os pares chave e valor do objeto
 * Objects.assign() -> copia um objeto e atribui ou nao novos atributos
 * Objects.getOwnPropertyDescriptor(objeto, 'atributo') -> descrição das definiçoes dos atributos
 * Objects.keys -> retorna as chaves
 * Objects.freeze -> congela o objeto
 * Objects.defineProperties -> define varias propriedades
 * Objects.defineProperty -> define uma propriedade
 */

const produto1 = { nome: 'p1', preco: 10, };
const produto2 = {... produto1};
console.log(produto1);
console.log(produto2);


console.log(Object.values(produto1));


console.log(Object.entries(produto1));
for (let [chave, valor] of Object.entries(produto1)){
    console.log(chave, valor);
}


const produto3 = Object.assign({}, produto1, {estoque: 10});
console.log(produto3);


const prop = Object.getOwnPropertyDescriptor(produto3, 'estoque');
console.log(typeof prop);
console.log(Object.getOwnPropertyDescriptor(produto3, 'estoque'));