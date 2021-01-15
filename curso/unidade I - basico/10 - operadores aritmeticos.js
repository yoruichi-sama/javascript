/**
 * Aritmeticos:
 * 
 * | +  -> adição e concatenação
 * | -  -> subtração
 * | /  -> divisão
 * | *  -> multiplicação
 * | ** -> potenciação 
 * | %  -> resto da divisão
 * 
 * Prescedencia: 
 * 
 * | ()
 * | **
 * | * / %
 * | + -
 * 
 * Incremento e Decremento
 * 
 * | ++
 * | --
 * 
 */

 let sum = 5+5;
 let sub = 5-5;
 let mul = 5*5
 let div = 5/5;

 let contador = 0;

 contador++;
 contador--;

 let nome = 'Yoruichi';

 resultado = sum + nome; // resultado ->  NaN (not a number)


 let numero = parseInt('50');
 let numero = parseFloat('5.2');
 let numero = Number('5.2');