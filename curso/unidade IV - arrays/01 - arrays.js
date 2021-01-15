const construirNomes = new Array('Eduardo', 'Maria', 'Joana');

const nomes = ['Eduardo', 'Maria', 'Joana'];
nomes[2] = 'Rayane';
delete nomes[3]; // remover sem alterar indice
console.log(nomes);

const frase = nomes.join(' ');
console.log(frase);
