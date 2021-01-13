/**
 * map -> alterar valores e retornar array
 */

const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 7, 11, 5, 7, 8, 98, 6, 6, 45, 64, 890];

const dobrarNumeros = numeros.map(valor => valor * 2);
console.log(dobrarNumeros);
console.log(numeros);

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
    { nome: 'João', idade: 12 },
];

const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);

const removerChaveNome = pessoas.map(obj => ({idade: obj.idade}));
console.log(removerChaveNome);

const addChaveID = pessoas.map((obj, indice) => {
    const newObj = {...obj};
    newObj.id = indice;
    return newObj;
});
console.log(addChaveID);