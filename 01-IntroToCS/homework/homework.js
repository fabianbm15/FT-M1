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

console.log(BinarioADecimal('1100'))


var str = '17';
console.log(str.length)

function DecimalABinario(num) {
   /*var newNum = '';
   for (let i = num; i === 2; i = Math.floor(i / 2)) {
      // i / 2 = 8
      if (i % 2 === 1) {
         newNum = '1' + newNum;
      } else {
         newNum = '0' + newNum;
      }
   }
   return newNum;


   for (let i = 0; i < 10; i++) {

   }
   */
   let binario = '';
   let dividido = num;
   while (dividido > 0) {
      binario = (dividido % 2) + binario;
      dividido = Math.trunc(dividido / 2);
   }

   return binario;
}


console.log(DecimalABinario(17))


module.exports = {
   BinarioADecimal,
   DecimalABinario,
};



