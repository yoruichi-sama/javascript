const form = document.querySelector('#form-imc');

form.addEventListener('submit', function(e) {
    e.preventDefault();    
    
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso Inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura Inválida', false);
        return;
    }

    const imc = getIMC(peso, altura);
    const indiceIMC = getIndiceIMC(imc);

    const msg = `Seu IMC é ${imc} - ${indiceIMC}.`

    setResultado(msg, true);

});


function setResultado(msg, isValid){

    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ``;
    
    const p = criaParagrafos();
    
    if(isValid) {
        p.classList.add('texto-resultado');
    }else{
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}

function criaParagrafos(){
    const paragrafo = document.createElement('p');
    return paragrafo;
}

function getIMC(peso, altura){
    return (peso / altura ** 2).toFixed(2);
}

function getIndiceIMC(imc){
    const indice = [
        'Abaixo do Peso', 
        'Peso Normal', 
        'Sobrepeso', 
        'Obesidade gral I', 
        'Obesidade gral III', 
        'Obesidade gral III'
    ];

    if(imc >= 39.9) return indice[5];    
    if(imc >= 34.9) return indice[4];    
    if(imc >= 29.9) return indice[3];    
    if(imc >= 24.9) return indice[2];    
    if(imc >= 18.5) return indice[1];    
    if(imc < 18.5) return indice[0];    
}