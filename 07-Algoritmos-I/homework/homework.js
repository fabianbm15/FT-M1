'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  console.log(num)
  var array = [1];
  var numInicial = 2;
  while (num > 1) {
    if (num % numInicial === 0) {
      num = num / numInicial;
      array.push(numInicial)
    } else {
      numInicial++;
    }
  }
  return array;
}
console.log(factorear(180))
/*
180 / 2 % = 0
90 / 2
45 / 3
15 / 3
 5 / 5
 1
*/

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  /*
  // --> Método personal
  let newArray = array;
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] < newArray[i + 1]) {
      continue;
    } else if (newArray[i] > newArray[i + 1]) {
      let aGuardar = newArray[i];
      let bGuardar = newArray[i + 1];
      newArray[i] = bGuardar;
      newArray[i + 1] = aGuardar;
      console.log(newArray);

    }
  }

  for (let j = 0; j < newArray.length; j++) {
    if (newArray[j] < newArray[j + 1]) {
      continue;
    } else if (newArray[j] > newArray[j + 1]) {
      bubbleSort(newArray);
    }
  }

  return newArray;
  */

  // --> Método instructor
  let swap = true;
  while (swap) {
    swap = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        let aux = array[i];
        array[i] = array[i + 1];
        array[i + 1] = aux;
        swap = true;
      }      
    }
  }

  return array;
}

let newArrayBub = [5, 2, 1, 7, 8, 4, 3, 9, 6];
console.log(bubbleSort(newArrayBub))

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  let newArray = array;
  for (let i = 1; i < newArray.length; i++) {
    var numExtract = newArray[i];
    var j = i - 1;
    while (j >= 0 && newArray[j] > numExtract) {
      newArray[j + 1] = newArray[j];
      j = j - 1;
    }
    newArray[j + 1] = numExtract;
  }
  return newArray;
}

let newArrayIns = [5, 2, 1, 7, 8, 4, 3, 9, 6];
console.log(insertionSort(newArrayIns))

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let newArray = array;
  var numMin = 0;
  for (let i = 0; i < newArray.length - 1; i++) {
    numMin = i;
    for (let j = i + 1; j < newArray.length; j++) {
      if (newArray[j] < newArray[numMin]) {
        numMin = j;
      }
    }
    swap(newArray, numMin, i);
  }

  function swap(newArray, numMin, i) {
    var a = newArray[numMin];
    newArray[numMin] = newArray[i];
    newArray[i] = a;
  }
  return newArray;
}
let newArraySel = [5, 2, 1, 7, 8, 4, 3, 9, 6];
console.log(selectionSort(newArraySel))

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
