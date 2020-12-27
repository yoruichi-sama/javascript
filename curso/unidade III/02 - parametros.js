function foo (){
    console.log(arguments[0]);
}

foo('Valor');

/**
 * Qunado definimos uma funçao com a palavra 'function', ou uma 
 * function expression, temos disponivel uma variavel chamada
 * 'arguments' que armazena todos os argumentos enviados para
 * função.
 */
 function soma (){
    
    let som = 0;

    for (const num of arguments) {
        som += num;
    }

    console.log(som);
 }

soma(1,2,3,4,5);


function array([valor1, valor2, valor3]) {

    console.log(valor1);
    console.log(valor2);
    console.log(valor3);
}

function obj({valor1, valor2, valor3}) {

    console.log(valor1);
    console.log(valor2);
    console.log(valor3);
}


function conta (operador, acumulador, ...numeros) {
    
    for (const numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }

    console.log(acumulador);
}

conta('*', 1, 5,6,8,9,7,5,1);


// usando args em arrow functions
const func = (...args) => {
    console.log(args);
};