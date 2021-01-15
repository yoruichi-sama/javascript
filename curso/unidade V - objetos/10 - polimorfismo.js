/**
 * Polimorfismo de sobrescrita -> metodo se comportar diferente nas classes filhas.
 */

 // superclass
function Conta (agencia, nConta, saldo){
    this.agencia = agencia;
    this.nConta - nConta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    
    if(this.saldo < valor) {        
        return `Saldo Insuficiente. Saldo: R$${this.getSaldo()}`;
    }

    this.saldo -= valor;
    return `Novo saldo: ${this.getSaldo()}`
};

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    return `Novo saldo: R$${this.getSaldo()}`
};

Conta.prototype.getSaldo = function(){
    return `${this.saldo}`;
};

Conta.prototype.verSaldo = function(){
    return `
            Agencia: ${this.agencia}\\n
            Conta: ${this.nConta}\\n
            Saldo: R$${this.saldo}
            `;
};

const conta = new Conta(1159,10008824,1500);
//console.log(conta);







// especializar
function ContaCorrente(agencia, nConta, saldo, limite){
    Conta.call(this, agencia, nConta, saldo);  // herda de Conta
    this.limite = limite;
}

// linkar prototypes
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

// sacar sobrescrito
ContaCorrente.prototype.sacar = function(valor){

    if (valor > (this.saldo + this.limite)){
        return `Saldo Insuficiente. Saldo: R$${this.getSaldo()} Limite Disponivel: ${this.getLimite()}`;
    }

    this.saldo -= valor;
    return `Saldo: R$${this.getSaldo()} Limite Disponivel: ${this.getLimite()}`;
};

ContaCorrente.prototype.getLimite = function(){
    return `${this.limite + this.saldo}`;
};


const contaCorrente = new ContaCorrente(1160,10008825,0,100);
//console.log(contaCorrente);
//console.log(contaCorrente.sacar(50));
//console.log(contaCorrente.sacar(50));
//console.log(contaCorrente.sacar(50));











function ContaPoupanca(agencia, nConta, saldo){
    Conta.call(this, agencia, nConta, saldo); // herdar de Conta
}

// linkar prototypes
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;