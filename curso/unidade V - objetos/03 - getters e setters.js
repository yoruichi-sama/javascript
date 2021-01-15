/**
 * Proteção das propriedades (atributos do obj)
 * 
 * getter retorna o valor qnd acessado pelo .
 * setter altera valor por atribuicao =
 */

function Produto(nome, preco, estoque){

    const ID = 1; // atributo privado.

    this.nome = nome; // atributo publico
    this.preco = preco; // atributo publico

    Object.defineProperty(this, 'estoque', {
        enumerable:false, // define se ela deve ser exibida em uma repetição for...in e por Object.keys() ou não.
        configurable: false, // redefinicao ou exclusão da propriedade
        get: function() { return estoque; },
        set: function(nValue) { 
            if (typeof nValue !== 'number'){
                throw new TypeError('Erro -> nValue is NaN.');
            }
            estoque = nValue; 
        },
    });
}

const produto = new Produto('tablet', 1900, 5);
