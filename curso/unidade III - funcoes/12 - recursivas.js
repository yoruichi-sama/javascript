/**
 * Obs -> o navegador pode travar se a recursividade for muito longa. 
 * 
 */
function recursiva(max) {

   if(max >= 10) {
       return;
   } else {
       max++;
   }

   console.log(max);
   recursiva(max);
}

recursiva(-10);