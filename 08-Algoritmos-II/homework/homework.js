'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length < 2) return array; // last case. 1 element left

	// find center and use it as pivot
	var pivot = array[Math.trunc(array.length / 2)],
		left = [],
		right = [],
		middle = [];

	// segregate elements as left, middle and right
	array.forEach(function (x) {
		if (x < pivot) {
			left.push(x);
		} else if (x === pivot) {
			middle.push(x);
		} else {
      .
			right.push(x);
		}
	});

	left = quickSort(left); // quick sort the left sub array
	right = quickSort(right); // quick sort the right sub array

	return left.concat(middle).concat(right); // concat left + middle + right

}

console.log(quickSort([5, 1, 4, 2, 8]))// .toEqual([1, 2, 4, 5, 8]);
//console.log(quickSort([5, 1, 4, 2, 8, 3, 7, 6, 9]))// .toEqual([1, 2, 4, 5, 8]);



function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
