const numeros = [1,2,3,4,5,6,7,8,9];

for (const numero of numeros) {
    if (numero % 2 === 0) {
        continue;        
    }
    console.log(numero);
}


for (const numero of numeros) {
    if (numero === 7) {
        console.log(numero);
        break;        
    }    
}
