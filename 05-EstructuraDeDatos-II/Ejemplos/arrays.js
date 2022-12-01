'use strict'

/* ARRAYS FUNCTIONS */

// MENOR

function minimo(arr) {
  var aux = arr[0];
  for (var i=1; i<arr.length; i++) {
    if (arr[i]<aux) aux = arr[i];
  }
  console.log('El minimo es: ', aux);
  return aux;
}

function minimoPersonal(array) {
  let  num = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < num) {
      num = array[i];
    }
  }
  return num;
}

let array = [7, 4, 1, 8, 2, 5, 6, 9, 3]
console.log(minimo(array))
console.log(minimoPersonal(array))

// MAYOR

function mayor(arr) {
  var aux = arr[0];
  for (var i=1; i<arr.length; i++) {
    if (arr[i]>aux) aux = arr[i];
  }
  console.log('El mayor es: ',aux);
  return aux;
}

function mayorPersonal(array) {
  let num = [0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > num) {
      num = array[i];
    }
  }
  return num;
}

console.log(mayor(array))
console.log(mayorPersonal(array))

// TOTAL

function total(arr) {
  var aux = arr.reduce(function(tot,num){
    return tot+num;
  })
  console.log('El total es: ', aux);
  return aux;
}

console.log(total(array))



function totalBis(arr) {
  var aux = 0;
  for (var i=0; i<arr.length; i++) {
    aux += arr[i];
  }
  console.log('El total es: ', aux);
  return aux;
}

console.log(totalBis(array))


// PROMEDIO

function promedio(arr) {
  var len = arr.length,
    aux = arr.reduce(function(tot,num) {
      return tot+num;
    })
  console.log('El promedio es: ',aux/len);
  return aux/len;
}

function promedioBis(arr) {
  var aux = 0;
  for (var i=0; i<arr.length; i++) {
    aux += arr[i];
  }
  console.log('El promedio es: ',aux/i);
  return aux/i;
}
