const inputTarefa = document.querySelector('.nova-tarefa');
const btnAdd = document.querySelector('.btn-add-tarefa');
const ulTarefas = document.querySelector('#tarefas');

btnAdd.addEventListener('click', function (){    
    if(!inputTarefa.value) return;    
    criaTarefa(inputTarefa.value);
});

inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!inputTarefa.value) return;    
        criaTarefa(inputTarefa.value);
    }
});

function criaTarefa(texto){    
    const li = document.createElement('li');
    li.innerText = texto;
    ulTarefas.appendChild(li);
    limpaInput();
    botaoApagar(li);
    salvarTarefas();
}

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function botaoApagar (li){
    li.innerText += ' ';
    const btnApagar = document.createElement('button');
    btnApagar.innerText = 'Apagar';    
    btnApagar.setAttribute('class', 'apagar');
    li.appendChild(btnApagar);
}

document.addEventListener ('click', function (e){
    const elemento = e.target;

    if (elemento.classList.contains('apagar')){
        elemento.parentElement.remove();
        salvarTarefas();
    }
});

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const lista = [];

    for (let tarefa of liTarefas){
        let textoTarefa = tarefa.innerText;
        textoTarefa = textoTarefa.replace('Apagar', '').trim();
        lista.push(textoTarefa);
    }

    const json = JSON.stringify(lista);
    localStorage.setItem('tarefas', json);
}

function lerTarefasSalvas(){
    const tarefasSalvas = localStorage.getItem('tarefas');
    const lista = JSON.parse(tarefasSalvas);

    for (const tarefa of lista) {
        criaTarefa(tarefa);
    }
}

lerTarefasSalvas();