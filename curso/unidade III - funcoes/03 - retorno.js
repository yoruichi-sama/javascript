// returna valor
function soma(a, b){
    return a+b;
}

// nao retorna valor
function soma(a, b){
    console.log(a+b);
}


// closure
function multiplicador (multi){

    return function mult(n) {
        return n * multi;
    }
    
}