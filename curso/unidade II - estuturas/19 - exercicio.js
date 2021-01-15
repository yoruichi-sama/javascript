/** 
 * node list -> se comporta de maneira similar a um array
 */

const paragrafos = document.querySelector('.paragrafos');
// selecionando colecao de elementos
const ps = paragrafos.querySelectorAll('p'); // retorna uma nodeList
console.log(ps);

// pegando css do body
const estilosBody = getComputedStyle(document.body);
const backgroundColor = estilosBody.backgroundColor;
console.log(backgroundColor);

for (const p of ps) {
    p.style.backgroundColor = backgroundColor;
    p.style.color = '#FFFFFF';
}