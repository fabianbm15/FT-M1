'use strict'

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial 
(representado como n!) es el producto de n por todos los números naturales menores que él y mayores
a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, 
respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que 
se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden 
intentar definir funciones que logren los mismos resultados pero de manera iterativa.

function nFactorial(n) {
  if (n < 0) {
     var error = 'No es posible calcular el factorial de un número negativo.';
     return error;
  } else if (n > -1 && n < 2) {
     return 1;
  } else if (n > 1) {
     return n * nFactorial(n - 1)
  }
}
*/
// 5 * 24 // 120
// 4 * 6
// 3 * 2
// 2 * 1


function nFactorial(n) {
  let num = 0;
  if (n === 1) {
    return 1;
  }

  return n * nFactorial(n - 1);
}

// 4 = 4 * 3 * 2 * 1
console.log(nFactorial(1))
/*
function nFibonacci(n) {
  var arr = [];
  if (n === 0) {
    arr = [0]
    return arr[n]; 
  } else if (n === 1) {
    arr = [0, 1]
    return arr[n];
  } else {
    arr = [0, 1]
    for (let i = 1; i < n; i++) {
    var num = arr[i] + arr[i - 1];
    arr.push(num);
  }
  return arr[n];
  }
}
*/
function nFibonacci(n) {
  var nMenos1 = n - 1;
  var nMenos2 = n - 2;
  if (n < 2) {
    return n;
  } else if (n > 1) {
    var num = nFibonacci(nMenos1) + nFibonacci(nMenos2);
    return num;
  }
}

console.log(nFibonacci(3))

/* 

nFibonacci(3) --> nFibonacci(2) + nFibonacci(1)
nFibonacci(2) --> nFibonacci(1) + nFibonacci(0)
                        1       +      0
nFibonacci(3) -->       1       +      1

nFibonacci(4) --> nFibonacci(3) + nFibonacci(2)

* nFibonacci(3) --> nFibonacci(2) + nFibonacci(1)
  nFibonacci(2) --> nFibonacci(1) + nFibonacci(0)
                          1       +      0
  nFibonacci(3) -->       1       +      1         =  2

* nFibonacci(2) --> nFibonacci(1) + nFibonacci(0)
                          1       +      0         =  1


nFibonacci(4) --> nFibonacci(3) + nFibonacci(2)
nFibonacci(4) -->       2       +       1          =  3   
*/

// 7: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 
//                          *

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que 
ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() {
  this.queue = [];
}

Queue.prototype.enqueue = function(valor) {
  this.queue.push(valor)
  return this.queue;
}

Queue.prototype.dequeue = function() {
  if (this.queue.length === 0) {
    return undefined;
  } 
  let dato = this.queue.shift();
  return dato;
}

Queue.prototype.size = function() {
  return this.queue.length;
}

var queue = new Queue();

console.log(queue.enqueue(5))
console.log(queue.enqueue(3))
console.log(queue.enqueue(2))
console.log(queue.enqueue(1))
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.enqueue(10))
console.log(queue.enqueue(12))



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
