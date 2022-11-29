"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular 
    de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro 
  puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo 
  buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, 
  retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número 
  par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() { // se declara la clase (primer letra mayúscula) linkedlist
  this.head = null; // se inicializa la linkedlist con un head con valor null
}

function Node(value) { // se declara la clase Node
  this.value = value; // se inicializa con un valor, este valor (value) debe ser recibido al crear un nodo
  this.next = null; // el valor del siguiente nodo será null una vez creado el nodo
  //this.prev = null;
}

LinkedList.prototype.add = function (value) { // se crea un método (add) en el prototipo de la clase LinkedList, este método se encargará de agregar nodos a la linkedlist
  let node = new Node(value); // se crea un nodo, recibiendo el valor desde el método de la clase
  let current = this.head; // current (actual) es el nodo head, es decir, el nodo que está a la cabeza de la lista enlazada (inicialmente es null)

  if (!current) { // si current está vacío, ingresará al if
    this.head = node; // el head, será el nodo ingresado, esto porque es el primero
    return node; // se retorna el nodo creado
  }
  
  while (current.next) { // mientras que haya algo en current.next, deberá entrar al null
    current = current.next; // current será igual a current.next, esto para llegar hasta el nodo que tenga null en su current.next, esto para agregar nodos al final de la linkedlist
  }
  
  current.next = node; // al llegar al final, el nodo con valor null, será cambiado por el nodo creado
  return node; // se retorna el nodo creado
}

LinkedList.prototype.remove = function () { // se crea el método remove en el prototipo de la clase linkedlist, este método será el encargado de eliminar nodos de la linkedlist
  var current = this.head; // // current (actual) es el nodo head, es decir, el nodo que está a la cabeza de la lista enlazada (inicialmente es null)
  if (!current) {  // si current está vacío, se ingresa al if
    return null; // en este caso, si current está vacío, se retornará el valor null, debido a que la lista está vacía
  } else if (!current.next) { // si current.next, es decir, el next del siguiente nodo, está vacío, ingresará al if
    var retornarValue1 = current.value; // se guarda el valor de el nodo actual en una variable
    this.head = null; // se declara el nodo head como null para eliminarlo
    return retornarValue1; // se retorna el valor que tenía el nodo head
  } else { // si no se cumplen las condiciones anteriores (lista vacía o lista con un solo elemento)
    while (current.next) {  // mientras que en el next del nodo actual haya algo, hará este ciclo
      if (!current.next.next) { // si el next del next del nodo actual está vacío, ingresará al if
        var retornarValue2 = current.next.value; // se cuarda el valor del siguiente nodo en una variable
        current.next = null; // se elimina el nodo final declarandolo como null el next del nodo actual
        return retornarValue2; // se retorna el valor que tenía el nodo eliminado
      }
      current = current.next; // actualización del while, si no se ingresa al if, entonces, se actualizará el nodo actual al siguiente y posteriormente se evaluará de nuevo
    }
  }
  return; // se utiliza para cortar el método, sin embargo, nunca llegará hasta aquí
}

LinkedList.prototype.search = function (value) { // se declara el método search, será el encargado de devolvernos el valor ingresado, sino, retornará null (el valor no existe en la lista enlazada)
  var current = this.head; // // current (actual) es el nodo head, es decir, el nodo que está a la cabeza de la lista enlazada (inicialmente es null)

  if (!current) { // si el nodo head está vacío, ingresará al if
    return null; // retorna null debido a que la lista está vacía
  } 
  
  while (current) { // mientras que haya algo en el nodo, se ejecutará el ciclo
    if (typeof value === 'string') { // si el valor a buscar es un string, ingresará al if
      if (current.value === value) { // si el valor del nodo actual es igual al valor por consultar ingresa al if
        return value; // retorna el valor buscado
      }
    } else if (typeof value === 'function') { // si el valor a buscar es una funcion, ingresará al if
      if (value(current.value)) { // si el resultado de esta función es true, ingresa al if
        return current.value; // retorna el valor del nodo actual
      }
    }
    current = current.next; // actualización del while, si no se ingresa al if, entonces, se actualizará el nodo actual al siguiente y posteriormente se evaluará de nuevo
  }

  return null; // retorna null si no se encuentra ningún valor
}
/*
--- Prueba de la clase LinkedList
var newNode = new LinkedList();
console.log(newNode.add('first'));
console.log(newNode.add('second'));
console.log(newNode.add('third'));

console.log(newNode.remove());
console.log(newNode.remove());
console.log(newNode.remove());

console.log(newNode.add('one'));
console.log(newNode.add('two'));
console.log(newNode.add('three'));
console.log(newNode.add('four'));
console.log(newNode.search('one'));
console.log(newNode.search('two'));
console.log(newNode.search('ssd'));
console.log(newNode.search('four'));
console.log(newNode.search(function (nodeValue) {
  return nodeValue === 'two'
}));

console.log(newNode);
*/



/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; 
  es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato 
  clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos 
  los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la 
  cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input 
  alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt 
    de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta 
    manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando 
  al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto 
  de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa 
  clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, 
con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando 
set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado 
  al hashear la clave)
*/

function HashTable() { // se crea la clase HashTable
  this.array = []; // se crea un array vacío
  this.numBuckets = 35; // se declara un número de buckets (tamanio del array)
}

HashTable.prototype.hash = function (str) { // se crea el método hash, este mostrará el índice de un valor que se va a ingresar a la hashtable
  let indice = 0; // se declara la variable indice
  for (let i = 0; i < str.length; i++) { // se realiza un for para cada una de las letras del string ingresado
    indice = indice + str.charCodeAt(i); // indice será igual al valor del indice + el valor unicode de cada letra
  }
  return indice % 35; // se retorna el valor hash de string ingresado, esto, realizando el módulo entre 35, que es el número de buckets
}


HashTable.prototype.set = function (clave, valor) { // se crea el método set dentro del prototipo de la clase HashTable
  let indice = this.hash(clave);
  
  if (typeof clave !== 'string') { // si el tipo de dato no es string, ingresará al if
    throw new TypeError('Keys must be strings'); // se envía un error debido a que el valor ingresado no es un string
  }

  let array = this.array; // se declara array con el valor del array de la hashtable creada
  array.length = 35; // se declara el tamanio del array, que es de 35 buckets

  if (!array[indice]) { // si array en la posicion hash está vacío ingresará al if
    array[indice] = {}; // se crea un objeto en la posición del array
    array[indice][clave] = valor; // se guarda el key/value recibido en la posición del array
  } else {
    array[indice][clave] = valor; // si hay algo en el array se guarda la nueva key/value
  }

  return this.array; // se retorna el array
}

HashTable.prototype.get = function (clave) { // se crea el método get en el prototipo de la clase HashTable, esté método se utiliza para obtener el value de una key agregada con el método add
  let array = this.array; // se declara array con el valor del array de la hashtable creada
  for (let i = 0; i < array.length; i++) { // se utiliza un for para buscar entre todo el array el key (clave) ingresado para buscar
    if (array[i]) { // si en la ubicacion del array hay algo, se ingresa al if
      let arrayKeys = Object.keys(array[i]); // se almacenan las keys en un array de keys
      for (let j = 0; j < arrayKeys.length; j++) { // se realiza un for utilizando estas keys, así se compara con la key (clave) a buscar
        if (arrayKeys[j].toString() === clave) { // si alguna key es igual a la clave ingresada, ingresa al if
          return array[i][clave]; // se retorna el value (valor) de la key en el array
        }
      }
    }
  }
  return false; // se retorna false si no se encuentra la clave
}

HashTable.prototype.hasKey = function (clave) {
  let array = this.array; // se declara array con el valor del array de la hashtable creada
  for (let i = 0; i < array.length; i++) { // se utiliza un for para buscar entre todo el array el key (clave) ingresado para buscar
    if (array[i]) { // si en la ubicacion del array hay algo, se ingresa al if
      let arrayKeys = Object.keys(array[i]); // se almacenan las keys en un array de keys
      for (let j = 0; j < arrayKeys.length; j++) { // se realiza un for utilizando estas keys, así se compara con la key (clave) a buscar
        if (arrayKeys[j].toString() === clave) { // si alguna key es igual a la clave ingresada, ingresa al if
          return true; // retorna true si el valor existe dentro del array
        }
      }
    }
  }
  return false; // se retorna false si no se encuentra la clave
}

/*
-- Prueba clase HashTable
var tablaHash = new HashTable();

console.log(tablaHash.set('key1', 'val1'));
console.log(tablaHash.set('key2', 'val2')); 
console.log(tablaHash.set('this is a very different string', 44.4));
console.log(tablaHash.get('key1'));

console.log(tablaHash.set('foo', 'bar1'));
console.log(tablaHash.set('ofo', 'bar2'));
console.log(tablaHash.get('ofo'));
console.log(tablaHash.get('foo'));
console.log(tablaHash.hasKey('ofo'));
*/

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
