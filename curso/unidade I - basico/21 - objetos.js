const objeto = {
    nome:'Yoruichi',
    idade:'24',
    anoNascimento: '1993',

    apresentacao(){
        console.log(`${this.nome} é o meu nome.`);
    }
};

console.log(objeto.nome);
objeto.apresentacao();

function criaObjeto(nome, idade, anoNascimento){
    return {
        nome: nome,
        idade: idade,
        anoNascimento: anoNascimento
    }
}

const pessoa1 = criaObjeto('Yoruichi', 27, 1993);
console.log(pessoa1);