const nome = prompt('Nome Completo: ');
const letra = prompt('Letra: ');

document.body.innerHTML += `Seu nome é: ${nome} <br>`;
document.body.innerHTML += `Seu nome tem: ${nome.length} letras <br>`;
document.body.innerHTML += `A Segunda letra do seu nome é: ${nome[1]} <br>`;
document.body.innerHTML += `Qual o primeiro indice da letra ${letra} no seu nome é: ${nome.indexOf(letra)} <br>`;
document.body.innerHTML += `Qual o ultimo indice da letra ${letra} no seu nome é: ${nome.lastIndexOf(letra)} <br>`;
document.body.innerHTML += `As ultimas 3 letras do seu nome são: ${nome.slice(-3)} <br>`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')} <br>`;
document.body.innerHTML += `Seu nome com letras maiusculas: ${nome.toUpperCase()} <br>`;
document.body.innerHTML += `Seu nome com letras minusculas: ${nome.toLowerCase()} <br>`;