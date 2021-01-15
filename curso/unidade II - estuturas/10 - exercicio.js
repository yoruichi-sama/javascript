const data = new Date();

const h1 = document.querySelector('#data1');
const h2 = document.querySelector('#data2');

h1.innerHTML = setData();


// -> solução 2
const opcoes = {
    //https://stackoverflow.com/questions/60218476/javascript-firefox-ignores-datestyle-and-timestyle-options-in-both-date-tolocal
    //dateStyle: 'full', -> não suportada em alguns navegadores
    //timeStyle: 'short', -> não suportada em alguns navegadores

    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: "numeric",
    minute: "numeric"    
};

h2.innerHTML = data.toLocaleDateString('pt-BR', opcoes);


// -> solução 1
function setData(){

    const dia = data.getDate();
    const mes = mesTexto(data.getMonth());
    const ano = data.getFullYear();
    const hrs = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());    
    const diaSemana = diaSemanaTexto(data.getDay());
    
    return `${diaSemana}, ${dia} de ${mes} de ${ano} ${hrs}:${min}`;
}


function diaSemanaTexto(diaSemana){

    const dias = [
        'domingo',
        'segunda-feira',
        'terça-feira',
        'quarta-feira',
        'quinta-feira',
        'sexta-feira',
        'sabado'
    ];

    return dias[diaSemana];
}


function mesTexto(mes){
    
    const meses = [
        'janeiro', 
        'fevereiro', 
        'março', 
        'abril', 
        'maio', 
        'junho', 
        'julho', 
        'agosto', 
        'setembro', 
        'outubro',
        'novembro',
        'dezembro'
    ];

    return meses[mes];
}

function zeroEsquerda(num){
    return num >=10 ? num: `0${num}`;
}

setData();