/**
 * Filter -> filtrar e retorna um array 
 */

const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 7, 11, 5, 7, 8, 98, 6, 6, 45, 64, 890];

// recebe funcao de callback e itera sobre os itens do array.
const numerosMaioresQue10 = numeros.filter(valor => valor > 10);
console.log(numerosMaioresQue10);

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
    { nome: 'João', idade: 12 },
];

const nomesCom5LetrasOuMais = pessoas.filter(obj => obj.nome.length >=5);
console.log(nomesCom5LetrasOuMais)

const pessoasIdadeMaior50 = pessoas.filter(obj => obj.idade >= 50);
console.log(pessoasIdadeMaior50);

const pessoasNomesTermanadosEmA = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a'));
console.log(pessoasNomesTermanadosEmA);