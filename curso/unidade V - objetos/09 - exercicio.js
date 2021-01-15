/**
 * CPF = '705.484.450-52'; 
 */


function ValidaCPF(CPFString){

    Object.defineProperty(this, 'CPF', {
        get: function(){
            // (/\D+/g) -> regex: tudo que nao é numero.
            return CPFString.replace(/\D+/g, '');
        }
    });
}


ValidaCPF.prototype.isValido = function(){
    
    if (typeof this.CPF === 'undefined') return false;
    if (this.CPF.length !== 11) return false;
    if (this.isSequencia()) return false;

    const CPFParcial = this.CPF.slice(0,-2);
    const digito1 = this.criaDigito(CPFParcial);
    const digito2 = this.criaDigito(CPFParcial + digito1);

    const validado = CPFParcial + digito1 + digito2;

    return this.CPF === validado;
};


ValidaCPF.prototype.criaDigito = function(CPFParcial){
    
    const CPFArray = Array.from(CPFParcial); // string to array

    let regressao = CPFArray.length + 1;

    let total = CPFArray.reduce((acumulador, valor) => {
        
        acumulador += Number(valor) * regressao;
        regressao--;

        return acumulador;

    }, 0);

    const digito = 11 - (total % 11);

    return digito > 9 ? '0':String(digito);
};


ValidaCPF.prototype.isSequencia = function(){
    return this.CPF[0].repeat(this.CPF.length) === this.CPF;
};


const CPF1 = new ValidaCPF('705.484.450-52');
const CPF1 = new ValidaCPF('705.484.450-53');
console.log(CPF1.isValido());
console.log(CPF2.isValido());