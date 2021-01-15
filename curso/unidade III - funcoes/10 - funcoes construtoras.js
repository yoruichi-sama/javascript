/**
 * Cria objetos.
 */

function Pessoa(nome, sobrenome) {
    
    const ID = 1; // atributo privado

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(`${nome}`);
    }    
}

const p1 = new Pessoa('yoruichi', 'shihoin');