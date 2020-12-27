/**
 * Factory Functions -> Funcoes que retornam objetos
 */

function criaPessoa(nome, sobrenome, altura, peso){

    return {
        nome: nome, 
        sobrenome: sobrenome, 
        altura: altura,
        peso: peso,

        fala: function (params) {
            return `${nome} esta falando sobre ${params}`;
        },

        imc: function () {
            return (this.peso / (this.altura ** 2)).toFixed(2);
        } 
    };
}

const p1 = criaPessoa('yoruichi', 'shihoin', 1.73, 59);
console.log(p1.fala('livros'));
console.log(p1.imc());