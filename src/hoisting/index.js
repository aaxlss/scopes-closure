a = 2;
var a;//por hoisting (el motor de javascript) va a pasar todas las asignaciones al inicio

console.log(a);

console.log(a)
var a = 2;//el motor de javascript no cambia de posicion a las variables inicializadas, solo las declaradas


console.log(nameOfDog('elmo'));

function nameOfDog(name){//por hoisting las funciones tambien son cambiadas al inicio
    console.log(`Dog's name: ${name}`)
}