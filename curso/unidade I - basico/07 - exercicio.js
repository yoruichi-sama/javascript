const nome = 'Yoruichi';
const sobrenome = 'Shihoin';
const idade = 27;
const peso = 59;
const alturaEmMetros = 1.73;

let imc;                // formula -> peso / (altura * altura)
let anoNascimento;

imc = peso / (alturaEmMetros * alturaEmMetros);
anoNascimento = 2020 - idade;

console.log(sobrenome, nome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log(`tem ${alturaEmMetros} de altura e seu IMC é de ${imc}`); // template string
console.log(sobrenome + ' ' + nome + ' nasceu em ' + anoNascimento + '.');