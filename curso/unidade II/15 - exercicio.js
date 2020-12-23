const container = document.querySelector('.container');

const elementos = [

    {tag: 'p', texto: 'Isso é um paragrafo.'},
    {tag: 'div', texto: 'Isso é uma div.'},
    {tag: 'section', texto: 'Isso é uma section.'},
    {tag: 'footer', texto: 'Isso é um footer.'}
];

const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag); 
    let textoCriado = document.createTextNode(texto);

    tagCriada.appendChild(textoCriado);

    div.appendChild(tagCriada);
}

container.appendChild(div);
