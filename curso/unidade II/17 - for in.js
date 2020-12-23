const array = ['abacate', 'banana', 'caju', 'damasco'];

for (let i in array) {
    console.log(array[i]);
}


const object = {
    nome: 'yoruichi',
    idade: '27',    
    numero: '1',
};

for (const key in object) {    
    console.log(object[key]);   
    console.log(key.toString());            
}