const data1 = new Date();
console.log(data1.toString());

const tresHoras = 60*60*3*1000; 
// fuso horario +3 horas em milesimos de segundos
const data2 = new Date(0 + tresHoras); // 01/01/1970 timestamp unix 
console.log(data2.toString());

const data3 = new Date(2020, 8, 24, 02, 00, 00, 000);
console.log(data3.toString());

// date string -> '2020-12-22T20:59.100' -> timestamp
// date string -> '2020-12-22 20:59:59'
const data4 = new Date('2020-12-22 20:59:59');
console.log(`Dia: ${data4.getDate()}`);
console.log(`Mes: ${data4.getMonth() + 1}`); // mes comeca do zero
console.log(`Ano: ${data4.getFullYear()}`);
console.log(`Hrs: ${data4.getHours()}`);
console.log(`Min: ${data4.getMinutes()}`);
console.log(`Seg: ${data4.getSeconds()}`);
console.log(`mls: ${data4.getMilliseconds()}`);
console.log(`Dia Semana: ${data4.getDay()}`);
console.log(data4.toString());

// milesimos de segundo do momento atual
console.log(Date.now());


function formataData(data){    

    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth());
    const ano = zeroEsquerda(data.getFullYear());
    const hrs = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    const seg = zeroEsquerda(data.getSeconds());
    
    return `${dia}/${mes}/${ano} ${hrs}:${min}:${seg}`;
}

const data5 = new Date();
const dataBR = formataData(data5);
console.log(dataBR);

function zeroEsquerda(num){
    return num >= 10 ? num:`0${num}`;
}