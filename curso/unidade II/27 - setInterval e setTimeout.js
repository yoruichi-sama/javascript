/**
 * setInterval -> configura um intervalo de tempo para que alguma
 * funcao seja executada num determinado momento.
 * 
 * setTimeout -> executa apenas uma vez.
 */


function retornaHora(data){

    if (data && !(data instanceof Date)){
        throw new TypeError (`${data} -> não é instancia de Date.`);
    }

    if (!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
        hour12:false
    });
}

//function intervalo (){
//    console.log(retornaHora());
//}

//setInterval(intervalo, 1000);

const timer = setInterval(function(){
    console.log(retornaHora());
}, 1000);

setTimeout(function() {
    clearInterval(timer);
}, 5000);