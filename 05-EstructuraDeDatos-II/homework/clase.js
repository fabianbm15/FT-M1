/*

function LinkedList() {
    this.head = null;
}

function Node(data) {
    this.data = data;
    this.next = null;
}


LinkedList.prototype.add = function (data) {
    let node = new Node(data);
    let current = this.head;

    if (!current) {
        this.head = node;
        // this._length++;
        return node;
    }

    while (current.next) {
        current = current.next;
    }

    current.next = node;
    // this._length++;
    return node;
}

let nuevoNodo = new LinkedList();
nuevoNodo.add(5)
nuevoNodo.add(9)
nuevoNodo.add(2)


console.log(nuevoNodo)

LinkedList.prototype.getAll = function () {
    let current = this.head;
    if (!current) {
        console.log('La lista está vacía');
        return
    }

    while (current) {
        console.log(current.data);
        current = current.next;
    }
    return;
}

nuevoNodo.getAll()
*/
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

function LinkedList() {
  this.head = null;
}

function Node(data) {
  this.data = data;
  this.next = null;
}

LinkedList.prototype.add = function (data) { // 10
  let node = new Node(data); // 10
  let current = this.head; // {data: 5, next: null}}

  if (!current) {
    this.head = node;
    return node;
  }
  
  while (current.next) { // {data: 5, next: null}
    current = current.next; // null
  }

  current.next = node;
  return node;
}

LinkedList.prototype.remove = function () {
  var current = this.head;
  if (!current) {
    var listaVacia = 'La lista está vacía.'
    return listaVacia;
  }
  while (current) {
    console.log(current.data);
    if (!current.next.next) {
      var retornarCurrent = current.next;
      current.next = null;
      console.log(retornarCurrent);
      return retornarCurrent;
    }
    current = current.next;
  }
  return;
}

LinkedList.prototype.search = function (data) {
  var current = this.head;
  
  while (current) {
    console.log(current.data);
    if (current.data === data) {
      return true;
    } else if (isEven(current.data)) {
      return true;
    }
    current = current.next;
  }
  return false;
}


function isEven(num) {
   if (num % 2 === 0) {
     return true;
   } else {return false;}
}

 console.log(isEven(10))

 var newNode = new LinkedList();
 console.log(newNode.add(5));
 console.log(newNode.add(10));
 console.log(newNode.add(15));
 console.log(newNode.add(20));

 // console.log(newNode.add(15));
 console.log(newNode.remove());
 console.log(newNode.search(30));


 console.log(newNode);



























