/**
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map
 */

const pessoas = [
    { id: 3, nome:'maria' },
    { id: 2, nome:'joao' },
    { id: 1, nome:'jose' },
];


// fora de ordem e chave string
const novasPessoas1 = {};
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas1[id] = {...pessoa };
}
console.log(novasPessoas1);


// chave number e ordem mantida
const novasPessoas2 = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas2.set(id, {...pessoa });
}
console.log();
console.log(novasPessoas2);
console.log();
console.log(novasPessoas2.get(1));
console.log();

// desestruturacao
for (const [identificador, { id, nome }] of novasPessoas2) {
    console.log(identificador, id, nome );
}