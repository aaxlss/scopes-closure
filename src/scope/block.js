const fruits = () => {
    if(true){
        var fruit1 = 'apple';
        let fruit2 = 'banana';//las variables let no pueden ser accedidas desde fuera del bloque de codigo al que pertenecen
        const fruit3 = 'kiwi';//las constantes no pueden ser accedidas desde fuera del bloque de codigo al que pertenecen

    }

    console.log(fruit1);
    console.log(fruit2);//no puede imprimir el valor
    console.log(fruit3);//no puede imprimir el valor

}

fruits();


let x = 1;
{
    let x = 2;
    console.log(x);
}
console.log(x);

const anotherFunction = () => {
    for (let index = 0; index < 10; index++) {
        setTimeout(()=>{
            console.log(index)
        },1000);
        
    }
}

anotherFunction();