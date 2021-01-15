let numero = prompt('Numero: ');

numero = Number(numero);

let numeroTitulo = document.getElementById('numero-titulo');
let texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `                   
                    <p>Raiz quadrada: ${Math.sqrt(numero)} </p>
                    <p>${numero} é inteiro: ${Number.isInteger(numero)} </p>
                    <p>É NaN: ${Number.isNaN(numero)} </p>
                    <p>Piso: ${Math.floor(numero)} </p>
                    <p>Teto: ${Math.ceil(numero)} </p>
                    <p>Com duas casas decimais: ${numero.toFixed(2)} </p>
                `