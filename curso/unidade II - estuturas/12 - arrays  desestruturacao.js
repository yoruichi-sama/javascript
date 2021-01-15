const numeros = [1, 2, 3];
[a, b, c] = numeros;

const lista = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000];
const [primeiro, segundo, ...resto] = lista;
const [um, , dois, , tres] = lista;

const listaLista = [[1,2,3],[4,5,6],[7,8,9]];
const num = listaLista[1][2];
const [,[,,seis]] = listaLista;
