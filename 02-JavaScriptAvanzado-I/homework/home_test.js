// # Homework JavaScript Avanzado I

// ## Scope & Hoisting

// Determiná que será impreso en la consola, sin ejecutar el código.

// > Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.
//      1. Las variables declaradas se limitan al bloque o contexto de ejecución en el cual son declaradas, 
//      por el contrario, las variables no declaradas, siempre son globales.
//      2. Las variables declaradas son creadas antes de ejecutar cualquier código, por lo que si son 
//      declaradas, su valor será undefined antes de que sea asignado algún valor.
//      3. Las variables declaradas son una propiedad no-configurable de su contexto de ejecución global,
//      por lo que no pueden por ejemplo borrarse, las no declaradas son confgurables.

// ```javascript
console.log('Ejercicio #1');
var x = 1; // MODIFICADO: variable declarada.
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x);
   console.log(a);
   var f = function (a, b, c) {
      b = a;
      console.log(b);
      b = c;
      var x = 5;
   };
   f(a, b, c);
   console.log(b);
};
c(8, 9, 10); // 10, 8, 8, 9
console.log(b); // 10
console.log(x); // 1
// ```

// ```javascript
console.log('');
console.log('Ejercicio #2');
var bar = 1; // MODIFICADO: línea cambiada de sitio para dar valor.
console.log(bar); // undefined -> 1
var baz = 2; // MODIFICADO: línea cambiada de sitio para corregir error, además, se declara variable.
console.log(baz); // error -> 2
foo(); // Es preferible primero declarar la función.
function foo() {
   console.log('Hola!');
}
// var bar = 1; // MODIFICADO: línea comentada
// baz = 2; // MODIFICADO: línea comentada
// ```

// ```javascript
console.log('');
console.log('Ejercicio #3');
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor); // Franco
// ```

// ```javascript
console.log('');
console.log('Ejercicio #4');
var instructor = 'Tony';
console.log(instructor); // Tony
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor); // Franco
   }
})(); // Se llama a la función inmediatamente
console.log(instructor); // Tony
// ```

// ```javascript
console.log('');
console.log('Ejercicio #5');
var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor); // The Flash
   console.log(pm); // Reverse Flash
}
console.log(instructor); // The Flash
console.log(pm); // Franco
// ```

// ### Coerción de Datos

// ¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

// ```javascript
console.log('');
console.log('Ejercicio #6');
6 / "3"
console.log(6 / "3") // 2
"2" * "3"
console.log("2" * "3") // 6
4 + 5 + "px"
console.log(4 + 5 + "px") // 9px
"$" + 4 + 5
console.log("$" + 4 + 5) // $45
"4" - 2
console.log("4" - 2) // 2
"4px" - 2
console.log("4px" - 2) // NaN -> no se puede resolver, Not A Number
7 / 0
console.log(7 / 0) // Infinity
{}[0] 
console.log({}[0]) // undefined, sería un objero sin claves ni valores, es decir, su clave en la posición 0 es undefined
parseInt("09")
console.log(parseInt("09")) // 9
5 && 2
console.log(5 && 2); // 2
2 && 5
console.log(2 && 5); // 5
5 || 0
console.log(5 || 0); // 5
0 || 5
console.log(0 || 5); // 5
[3]+[3]-[10]
console.log([3]+[3]-[10]); // 23, [3]+[3] se convierte a string, es decir, '33', posteriormente, '33' - [10], se convierte a número, sería 23.
3>2>1
console.log(3 > 2 > 1); // false, esto porque 3 > 2 es true, por lo que sería true > 1, el valor de true es 1, entonces es false.
// [] == ![]
console.log([] == ![]); // true
/* Explicación [] == ![] es true
=> []==![]
=> []==false // Type conversion by the statement itself
=> []==0 // To number of right operand
=> ""==0 // To Primitive call for Array which will in this case convert to empty string
=> 0==0 // To number call of "" which is 0
=> true
*/ 
// ```

// > Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

// ### Hoisting

// ¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

// ```javascript
console.log('');
console.log('Ejercicio #7');
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test(); // undefined, porque la variable no tiene valor, a pesar de estar declarada, esta al momento de mostrar en consola no tiene valor.
        // 2, la función ya está declarada, por lo que solo con llamarla nos retornará su valor '2'.
// ```

// // Y el de este código? :

// ```javascript
console.log('');
console.log('Ejercicio #8');
var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack;
}

getFood(false); 
console.log(getFood(false)); // undefined, esto ocurre porque a pesar de que snack está declarado, no tiene valor debido a que el valor que ingresa a la función es false, por lo que el if no se cumple, por lo que no cumple valor.
// ```

// ### This

// ¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

// // ```javascript
console.log('');
console.log('Ejercicio #9');
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname()); // Aurelio De Rosa

var test = obj.prop.getFullname;

console.log(test()); // undefined
// ```

// ### Event loop

// Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

// ```javascript
console.log('');
console.log('Ejercicio #10');
function printing() {
   console.log(1);
   setTimeout(function () {
      console.log(2);
   }, 1000);
   setTimeout(function () {
      console.log(3);
   }, 0);
   console.log(4);
}

printing(); // 1 4 3 2, inicialmente, 1 y 4 no tienen retraso, por lo que se mostrará en orden de las líneas de código, posteriormente, 3 está dentro de una función setTimeout, a pesar de que su retraso sea cero, va después de un console.log sin retraso, al final, 2 tiene un retraso de 2 segundos, por lo que iría al final.
// ```
