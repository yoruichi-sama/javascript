const pontuacao1 = 999;
const pontuacao2 = 1000;

let nivel1 = pontuacao1 >= 1000 ? 'Usuário VIP':'Usuário Padrão';
console.log(nivel1);
let nivel2 = pontuacao2 >= 1000 ? 'Usuário VIP':'Usuário Padrão';
console.log(nivel2);

const usuarioCor = null;
const corPadrao = usuarioCor || 'Preta';
console.log(corPadrao);