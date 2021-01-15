const pessoa = {
    nome: 'Rayane',
    sobrenome: 'Paiva',
}

delete pessoa.sobrenome;

const objeto = new Object();
objeto.nome = 'Rayane';
objeto.funcaoNome = () => objeto.nome;
console.log(objeto);


//Factory functions
function criaObjeto(nome, sobrenome){
    return {
        nome, 
        sobrenome,
        get nomeCompleto() {
            return `${nome} ${sobrenome}`;
        }        
    }
}

const obj = criaObjeto('rayane', 'paiva');
console.log (obj.nomeCompleto);


//Constructor functions
function Pessoa(nome, sobrenome){    
    this.nome = nome; 
    this.sobrenome =sobrenome;

    Object.freeze(this); // impede alteraçoes nos valores do obj
}