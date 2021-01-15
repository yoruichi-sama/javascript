/**
 * 
 */

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(valor){
    this.preco += valor;
};

Produto.prototype.desconto = function(valor){
    this.preco -= valor;
};

/**
 * Especializar -> Camiseta é uma especializacao de Produto.
 * Tudo que os objetos Produto tem acesso os objetos Camiseta
 * tambem tem. 
 */ 
function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco); // herança
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
// indica q quem esta criando o objeto é a Function Camiseta
Camiseta.prototype.constructor = Camiseta;
// sobrescrever funcao aumento
Camiseta.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
};


function Caneca(nome, preco, material){
    Produto.call(this, nome, preco); // herança
    this.material = material;
}
// linkar os prototypes
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto('generico', 10);
const camiseta = new Camiseta('generico', 10);
const caneca = new Camiseta('generico', 10);
console.log(produto);
console.log(camiseta);
console.log(caneca);

/**
 * Javascript não é uma linguagem que apresenta a característica de 
 * herança em específico, portanto não existe "herança" aqui. O que 
 * ocorre, na verdade, é "delegação". Esse seria o termo mais correto 
 * para descrever "Herança" em JS.
 * 
 * Em -> Camiseta.prototype = Object.create(Produto.prototype);
 * 
 * Estamos, claramente, falando que o Camiseta.prototype é um novo 
 * objeto vazio que tem como protótipo Produto.prototype. Dessa 
 * forma, estamos adicionando Camiseta.prototype na cadeia de 
 * protótipos de Produto. Por consequência, tudo o que não existir 
 * em Camiseta nem em Camiseta.prototype será delegado para 
 * Produto.prototype (e assim por diante até chegar no topo da cadeia 
 * de protótipos).
 */