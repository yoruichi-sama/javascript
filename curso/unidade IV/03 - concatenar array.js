const nume = ['1', '2', '3', '4', '5'];
const nome = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];


const join = nume.concat(nome);

console.log(join);

// spread
const join2 = [...nume, ...nome];
console.log(join2);
