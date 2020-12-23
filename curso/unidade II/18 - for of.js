/**
 * For Classico -> Iteraveis (arrays ou strings)  
 * For in -> Retorna o indice ou chave (arrays, objetos ou strings)
 * For of -> Retorna o valor ou chave (arrays ou strings)
 */ 

const nome = 'yoruichi';

for (const valor of nome) {
    console.log(valor);
}

const array = ['abacate', 'banana', 'caju', 'damasco'];

for (const valor of array) {
    console.log(valor);   
}

array.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
});