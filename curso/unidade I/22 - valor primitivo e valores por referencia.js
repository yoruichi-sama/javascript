/**
 * Primitivos (imutáveis):
 * 
 * | -> string
 * | -> number
 * | -> boolean
 * | -> undefined
 * | -> null
 * | -> bigint
 * | -> symbol
 * 
 * let a = 'A';
 * let b = a;
 * 
 * Quando lidamos com valores primitivos fazemos cópias.
 * 
 * Referências (mutáveis)
 * 
 * | -> array
 * | -> object
 * | -> function
 * 
 * let a = [1, 2, 3];
 * let b = a;
 * 
 * Agora estamos lidando com ponteiros (referencias)... 
 * b aponta para o mesmo local da memoria que a.
 * 
 * let b = [...a]; -> copia independente do array a
 */