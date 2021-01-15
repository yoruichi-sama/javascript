/**
 * reduce -> reduzir array a um elemento.
 */

const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 7, 11, 5, 7, 8, 98, 6, 6, 45, 64, 890];

const valorInicialAcumulador = 0;

const somaNumeros = numeros.reduce((acumulador, valor, indice, array) => {
    //console.log(acumulador, valor, indice, array);
    return acumulador + valor;
}, valorInicialAcumulador);
console.log(somaNumeros);


// Filter
const valoresPares = numeros.reduce((acumulador, valor) => {
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);
console.log(valoresPares);

// Map
const dobrarValores = numeros.reduce((acumulador, valor) => {
    acumulador.push(valor * 2);
    return acumulador;
}, []);
console.log(dobrarValores)





const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
    { nome: 'João', idade: 90 },
];


const pessoaMaisVelha = pessoas.reduce((acc, obj, indice, array) => {
    if (acc.idade > obj.idade) return acc;
    return obj;
});
console.log(pessoaMaisVelha);