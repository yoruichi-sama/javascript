/**
try {
    // executa quando não há erros
} catch (error) {
    // executa quando há erros
} finally {
    // executa independente da existencia de erros ou nao.
}
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


try {

    const data = new Date('09-24-1993 02:00:00');
    const hora = retornaHora(data);
    console.log(hora);

} catch (e) {
    console.log(e);
} finally{
    console.log('Bom dia.');
}