const helloWorld = () => {
    const hello = 'hello World'; //Creando variable local y solo se puede acceder dentro del bloque de codigo
    console.log(hello);
}
helloWorld();

console.log(hello);//esta variable no existe de manera global


const localScope = () => {
    const localScope = 'Local scope';//variable local dentro de un bloque de codigo.

    const scope = () => localScope//llamando la variable local que pertenence al mismo codigo de la funcion.

    console.log(scope())
}

localScope();