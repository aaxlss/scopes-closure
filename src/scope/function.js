const fruits = () => {
    var fruit = 'apple';
    console.log(fruit) 
}

fruits();

const anotherFunction = () => {
    var x = 1;
    var x = 2;//es posible reasignar la variable 
    let y = 1;
    //let y = 2;// no se puede reasignar la variable 
    console.log(x);
    console.log(y);
}
anotherFunction()