/**
 * Controle sobre as chaves.
 * 
 * Object.defineProperty() -> definioes de uma propriedade.
 * 
 * Object.defineProperties() -> definicoes de varias propriedades.
 */


function Produto(nome, preco, estoque){

    this.nome = nome; 
    this.preco = preco; 

    Object.defineProperty(this, 'estoque', {
        enumerable:false, // define se ela deve ser exibida em uma repetição for...in e por Object.keys() ou não.
        value: estoque, // define valor da propriedade (exibido no print)
        writable: false, // define se podemos alterar valor da propriedade definida.
        configurable: false, // redefinicao ou exclusão da propriedade
        get: function() { return estoque; },
        set: function(nValue) { estoque = nValue; },
    });
}

const obj = new Produto('tablet', 1900, 4);
console.log(Object.keys(obj)); // mostra as chaves.

// iterando sobre as chaves
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        console.log(key);        
    }
}




function Produto2(nome, preco, estoque){
    
    Object.defineProperties(this, {        
        nome: {
            enumerable:true,
            value: nome,
            writable: true,
            configurable:true,
        },
        preco: {
            enumerable:true,
            value: preco,
            writable: true,
            configurable:true,
        },
    });

    Object.defineProperty(this, 'estoque', {
        enumerable:false, // define se ela deve ser exibida em uma repetição for...in e por Object.keys() ou não.
        value: estoque, // define valor da propriedade (exibido no print)
        writable: false, // define se podemos alterar valor da propriedade definida.
        configurable: false, // redefinicao ou exclusão da propriedade
        get: function() { return estoque; },
        set: function(nValue) { estoque = nValue; },
    });
}