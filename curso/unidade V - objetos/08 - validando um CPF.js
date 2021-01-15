/**
 * Validando um CPF.
 * 
 * 705.484.450-52
 * 080.987.720-03
 * 
 * multiplicando os numeros por uma regressão iniciada em 10:
 * 
 * 7 x 10 = 70
 * 0 x 09 = 00
 * 5 x 08 = 40
 * 4 x 07 = 28
 * 8 x 06 = 48
 * 4 x 05 = 20
 * 4 x 04 = 16
 * 5 x 03 = 15
 * 0 x 02 = 00     total -> 237   |    digito -> 52
 * 
 * pegar o primeiro digito:
 * 
 * 11 - (237 % 11) = 5 (Primeiro digito)
 * o numero resultante do calculo do digito nao pode ser maior que 9.
 * caso seja vamos considerar o digito como 0.
 * 
 * Repetimos a multiplicacao incluindo o primeiro digito comecando
 * a regressao de 11: 
 * 
 * 7 x 11 = 77
 * 0 x 10 = 00
 * 5 x 09 = 45
 * 4 x 08 = 32
 * 8 x 07 = 56
 * 4 x 06 = 24
 * 4 x 05 = 20
 * 5 x 04 = 20
 * 0 x 03 = 00     
 * 0 x 05 = 10     total -> 284   |    digito -> 52
 * 
 * pegar o segundo digito:
 * 
 * 11 - (284 % 11) = 2 (Segundo digito)
 * o numero resultante do calculo do digito nao pode ser maior que 9.
 * caso seja vamos considerar o digito como 0.
 */

let CPF = '705.484.450-52';
// (/\D+/g) -> expressao regular que representa tudo que nao é numero.
let CPFLimpo = CPF.replace(/\D+/g, '');
console.log(CPFLimpo);
// transforma string em um array
let CPFArray = Array.from(CPFLimpo);