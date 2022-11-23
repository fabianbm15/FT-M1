// Closure
// Ejemplo 1
function incrementar() {
    var count = 0;
    return function () {
        count++;
        return count;
    }
}

const instance_one = incrementar();
const instance_two = incrementar();

console.log(instance_one());
console.log(instance_one());
console.log(instance_one());
console.log(instance_two());

// Ejemplo 2
function saludar(saludo) {
    return function (nombre) {
        console.log(saludo + ' ' + nombre);
    }
}

var saludarHola = saludar('Hola');
var saludarDespedida = saludar('Chau');

saludarHola('Toni'); // Hola Toni
saludarDespedida('Mauro') // Chau Mauro

// No closure
// Ejemplo 1
var count = 0;
const no_closure = function () {
    count++;
    return count;
}

console.log(no_closure());
console.log(no_closure());
const inst_no_clou = no_closure();
console.log(inst_no_clou);










