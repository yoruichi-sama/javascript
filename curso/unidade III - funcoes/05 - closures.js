/**
 * closure é a capacidade da funcao acessar o seu escopo
 * lexico.
 */


function retornaFoo(){
    const nome = 'yoruichi';
    return function(){
        return nome;
    };
}

const func = retornaFoo();
console.dir(func);