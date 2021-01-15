/**
 * Declaração literal.
 * Ocorre o hoisting (elevacao da funcao definida para o topo do js).
 * @param {*} params 
 */
function foo(params) {
    console.log('func');
}


/**
 * Funcões são First-class objects, ou seja, podemos
 * trata-las como dados.
 * Function expression
 */
const func = function(){
    console.log('func expression');
};


/**
 * Arrow function.
 */
const arrow = () =>{
    console.log('arrow');
};


const objeto = {
    falar(){
        console.log('dentro do obj');
    }
};