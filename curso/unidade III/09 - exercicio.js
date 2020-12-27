function criaCalcularoda() {
    return{

        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        inicia(){    
            this.cliqueBtn();                       
        },

        cliqueBtn(){
            // this -> calculadora
            document.addEventListener('click', function (e) {
                const elemento = e.target;
                // this -> document
                if (elemento.classList.contains('btn-num')){
                    this.btnParaDisplay(elemento.innerText);
                }

                if (elemento.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if (elemento.classList.contains('btn-del')){
                    this.apagaUm();
                }

                if (elemento.classList.contains('btn-eq')){
                    this.conta();
                }
            }.bind(this)); // usar o this de fora
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        },

        clearDisplay(){
            this.display.value = '';
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0,-1);
        },

        conta(){
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta){
                    this.display.value = 'ERROR';
                    return;
                }

                this.display.value = conta;
            } catch (error) {
                this.display.value = 'ERROR';
            }
        }
    }; 
}

const calculadora = criaCalcularoda();
calculadora.inicia();