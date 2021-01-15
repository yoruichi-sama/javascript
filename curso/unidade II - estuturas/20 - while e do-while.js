let teste = true;
let controle = 0;

while (teste) {
    console.log(`${controle} infinito`);
    if(controle > 10){
        teste = false;
    }
    controle++;
}

teste = true;
console.log(`-------------------------------------------------`);

do {

    console.log(`${controle} infinito`);
    if(controle > 15){
        teste = false;
    }
    controle++;

} while (teste);