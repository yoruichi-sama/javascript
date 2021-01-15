/**
 * 
 */

const objeto1 = {
    chave1:1,
    chave2:2,
    chave3:3,
}

const objeto2 = {
    chave4:4,
}

// o objeto 2 pode acessar as chaves do objeto 1
Object.setPrototypeOf(objeto2, objeto1);
console.log(objeto2.chave1);

// acessar o proto de um objeto.
console.log(Object.getPrototypeOf(objeto1));
console.log(Object.getPrototypeOf(objeto2));

function Objeto0(chave0){
    this.chave0 = chave0;
}

const objeto3 = {
    chave5:5,
}
Object.setPrototypeOf(objeto3, Objeto0.prototype);
console.log(Object.getPrototypeOf(objeto3));

const objeto4 = Object.create(Objeto0.prototype);
console.log(Object.getPrototypeOf(objeto4));

//const objeto5 = Object.create(pai, {chaves configuraveis})
const objeto5 = Object.create(Objeto0.prototype, {
    preco:{
        writable: true,
        configurable:true,
        enumerable:true,
        value:90,
    },
    cor:{
        writable: true,
        configurable:true,
        enumerable:true,
        value:'red',
    },
});
console.log(Object.getPrototypeOf(objeto5));
console.log(objeto5.preco, objeto5.cor);