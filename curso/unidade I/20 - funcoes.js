function foo(nome){
    return `oi ${nome}`;
}
console.log(foo('yoruichi'));


function soma (x=0, y=0){
    return x + y;
}
console.log(soma(2,3));


const potencia = function(a, exp=2){
    return Math.pow(a, exp);
};
console.log(potencia(2,3));


const raiz = (n=0) => { // Igual -> const raiz = n => n ** 0.5;
    return n ** 0.5;
};
console.log(raiz(2));


