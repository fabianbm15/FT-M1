'use strict';

function BinarioADecimal(num) {
   var exp = 0;
   var decimal = 0;
   for (let i = num.length - 1; i > -1; i--) {
      var newNum = Number(num[i]);
      decimal = decimal + (newNum * (Math.pow(2,exp)))
      exp = exp + 1;
   }
   return decimal;
}

function DecimalABinario(num) {
   let binario = '';
   let dividido = num;
   while (dividido > 0) {
      binario = (dividido % 2) + binario;
      dividido = Math.trunc(dividido / 2);
   }

   return binario;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};



