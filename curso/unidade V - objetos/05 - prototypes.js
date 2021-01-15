/**
 * Console.dir -> Exibe uma lista interativa das propriedades do 
 * objeto JavaScript especificado. (metodo desnecessario nao recomendado)
 * 
 * JS é baseado em prototipos para passar propriedades e metodos de um 
 * objeto para outro.
 * 
 * prototypes -> modelo ou molde para futuras produçoes. todos os objetos
 * tem uma referencia interna para um prototipo (__proto__) que vem da 
 * propriedade prototype da funcao construtora que foi usada para cria-lo.
 * quando tentamos acessar um membro de um objeto primeiro o motor do JS
 * vai tentar encontrar esse memtbo no proprio objeto e depois a cadeia 
 * de prototipos é usada até o topo (nulll) ate encontrar (ou não) tal 
 * membro.
 * 
 * Melhora a performace impedindo repetição de codigos em objetos. (funcoes 
 * dentro de objetos)
 */

// funcao construtora (similar a classe)
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => `${this.nome} ${this.sobrenome}`;
}

// instancias (objetos)
const pessoa1 = new Pessoa('rayane','paiva');
const pessoa2 = new Pessoa('leticia','paiva');

console.log(pessoa1);
console.dir(pessoa2);


function PessoaProto(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;    
}

PessoaProto.prototype.nomeCompleto = function () {
    return `${this.nome} ${this.sobrenome}`;
}

const pessoa3 = new PessoaProto('carolina','paiva');
console.log(pessoa3.nomeCompleto());