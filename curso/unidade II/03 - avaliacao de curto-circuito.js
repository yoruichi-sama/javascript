/**
 * Valores que sao avaliados como falso:
 * 
 * | -> false
 * | -> 0
 * | -> '' | "" | ´´
 * | -> null | undefined
 * | -> NaN
 * 
 * qualquer outro valor é avaliado como verdadeiro.
 */


console.log('yoruichi' && true && 'shihoin');
console.log(false && true && 'shihoin');

console.log('yoruichi' || true || 'shihoin');
console.log(false || false || 'shihoin');