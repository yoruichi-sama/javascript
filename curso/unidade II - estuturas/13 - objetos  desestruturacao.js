const pessoa = {
    
    nome:'yoruichi',
    idade:'27',

    endereco: {
        
        rua: 'rua 1',
        numero: 2,
    },

};


const {nome} = pessoa;
const {idade} = pessoa;
const {telefone = ''} = pessoa; // valor padrao
const {nome: chaveN} = pessoa; // renomeando chave

const {endereco: {rua, numero}} = pessoa;
const {endereco} = pessoa;
