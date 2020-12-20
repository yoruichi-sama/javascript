function naoEnviaForm(){
    
    const listaObjetos = [];
    const form = document.querySelector('.form'); 
    const resultado = document.querySelector('#resultado'); 

    // form.onsubmit = function (e) {
    //     e.preventDefault();
    //     console.log('form nao enviado');
    // };

    function recebeEventoForm (e) {

        e.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        listaObjetos.push(
            { 
                nome: nome.value,
                sobrenome: sobrenome.value,
                peso: peso.value,
                altura: altura.value,
            }
        );

        console.log(listaObjetos);
        
        resultado.innerHTML += `<p>${nome.value}, ${sobrenome.value}, ${peso.value}, ${altura.value}</p>`;
    }

    form.addEventListener('submit', recebeEventoForm);
}

naoEnviaForm();