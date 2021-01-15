/**
 * Função Fabrica.
 * Desacoplar metodos dos objetos. 
 */


 const falar = {
    falar() {
        console.log('falar');
    },
 };

 const comer = {
    comer(){
        console.log('comer');
    },
 };

const beber = {
    beber(){
        console.log('beber');
    },
};

const pessoaPrototype = Object.assign ({}, falar, comer, beber);

function criaPessoa(nome, idade){
    return Object.create(pessoaPrototype, { 
        nome:{ value: nome },
        idade:{ value: idade },
     });
}

const pessoa = criaPessoa('Rayane', '27');
console.log(pessoa);