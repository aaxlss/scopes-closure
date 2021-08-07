var hello = 'Hello';
var hello = 'Hello +'; // asignacion de nuevo valor a la variable. Mala practica para scopes globales
let world = 'Hello world'; 
let world = 'Hello'; //Asignacion de nuevo valor a una constante global. Error en tiempo de ejecucion
const helloWorld = 'Hello World'

const anotherFunction = () =>{
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();

const helloWorld2 = () => {
    globalVal = 'Global var' //Creando variable global dentro de una funcion. Mala practica para crear variables globales
} 

helloWorld2();
console.log(globalVal);

