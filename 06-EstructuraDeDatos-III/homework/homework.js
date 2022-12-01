"use strict";

const bus = require("@11ty/eleventy/src/EventBus");
const { setMaxListeners } = require("@11ty/eleventy/src/Util/AsyncEventEmitter");

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de 
  sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). 
  Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png 
  dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.size = function () {
  if (!this.left && !this.right) {
    return 1;
  }
  if (!this.left) {
    return 1 + this.right.size();
  }
  if (!this.right) {
    return 1 + this.left.size();
  }
  if (this.left && this.right) {
    return 1 + this.left.size() + this.right.size();
  }
}

BinarySearchTree.prototype.insert = function (value) {
  if (value >= this.value) {
    if (!this.right) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
  if (value < this.value) {
    if (!this.left) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
}

BinarySearchTree.prototype.contains = function (value) {
  if (value === this.value) {
    return true;
  } else if (value > this.value) {
    if (!this.right) {
      return false;
    } else {
      return this.right.contains(value);
    }
  } else if (value < this.value) {
    if (!this.left) {
      return false;
    } else {
      return this.left.contains(value);
    }
  }
}

BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
  if (!order || order === 'in-order') {
    // in order
    if (this.left) {
      this.left.depthFirstForEach(cb, order);
    }
    cb(this.value)
    if (this.right) {
      this.right.depthFirstForEach(cb, order);
    }
  } else if (order === 'post-order') {
    // post order
    if (this.left) {
      this.left.depthFirstForEach(cb, order);
    }
    if (this.right) {
      this.right.depthFirstForEach(cb, order);
    }
    cb(this.value)
  } else if (order === 'pre-order') {
    // pre order
    cb(this.value)
    if (this.left) {
      this.left.depthFirstForEach(cb, order);
    }
    if (this.right) {
      this.right.depthFirstForEach(cb, order);
    }
  }
}

BinarySearchTree.prototype.breadthFirstForEach = function (cb, array_queue = []) {
  if (this.left) {
    array_queue.push(this.left)
  }
  if (this.right) {
    array_queue.push(this.right)
  }
  cb(this.value);
  if (array_queue.length > 0) {
    console.log("------> ", array_queue)
    array_queue.shift().breadthFirstForEach(cb, array_queue) // <-
  }
};

// --> Pruebas
// 20 15 25 5 17
const arbolito = new BinarySearchTree(20);
const node1 = new BinarySearchTree(15);
const node2 = new BinarySearchTree(25);
const node3 = new BinarySearchTree(5);
const node4 = new BinarySearchTree(17);
arbolito.left = node1;
arbolito.right = node2;
arbolito.left.left = node3;
arbolito.left.right = node4;
console.log(arbolito);
console.log(arbolito.size())

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
