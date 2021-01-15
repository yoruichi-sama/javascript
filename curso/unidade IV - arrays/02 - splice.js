/**
 * Função Splice
 * 
 * array.splice(indice começo, quantos apagar, elementos para add);
 */

const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];

const removidos = nomes.splice(4,1); // retorna array dos removidos

// Number.MAX_VALUE -> maior numero possivel.