function Calculadora(){

    this.display = document.querySelector('.display');
    
    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    };

    this.capturaCliques = () => {
        document.addEventListener('click', e =>{
            const elemento = e.target;

            if (elemento.classList.contains('btn-num')){
                this.addNumDisplay(elemento);
            }

            if (elemento.classList.contains('btn-clear')){
                this.clear();
            }

            if (elemento.classList.contains('btn-del')){
                this.del();
            }

            if (elemento.classList.contains('btn-eq')){
                this.equal();
            }
        });
    };

    this.addNumDisplay = (elemento) =>{
        this.display.value += elemento.innerText;
        this.display.focus();
    };

    this.clear = () => {
        this.display.value = '';
    };

    this.del = () => {
        this.display.value = this.display.value.slice(0,-1);
    };

    this.equal = () => {
        try {
            const conta = eval(this.display.value);

            if(!conta){
                this.display.value = 'ERROR';
                return;    
            }

            this.display.value = conta;
        } catch (error) {
            this.display.value = 'ERROR';
        }
    };

    this.capturaEnter = () =>{
        document.addEventListener('keypress', (e) => {
            if (e.keyCode !== 13) return;
            this.equal();            
        });
    };
}


const calculadora = new Calculadora();
calculadora.inicia();