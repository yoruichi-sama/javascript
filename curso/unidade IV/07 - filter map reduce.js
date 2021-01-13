/**
 * Retornar a soma do dobro de todos os pares.
 * -> Filtrar pares
 * -> Dobrar valores
 * -> Somar tudo
 */

const numeros = [1, 2, 3, 4, 5, 6];

const somaDobro = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((acc, valor) => {
        return acc + valor;
},0);

console.log(somaDobro);