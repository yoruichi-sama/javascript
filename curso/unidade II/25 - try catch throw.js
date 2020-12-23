/**
 * | -> não exibir erro (stack trace) para usuario.
 */


try {
    console.log(naoExisto);    
} catch (error) {
    console.log(`Erro -> variavel nao existe.`);
}


function soma (a, b){
    
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Erro -> a || b is NaN.'); // lancando erro
    }

    return a+b;
}

// tratando erro
try {

    console.log(soma(2,3));
    console.log(soma('2',3));    

} catch (error) {
    console.log('Erro -> msg para o usuario.');
}
