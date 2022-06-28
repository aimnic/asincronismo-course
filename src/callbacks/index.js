function suma(num1,num2){
    return num1 + num2;
}

function calc(num1,num2,suma){
    return suma(num1,num2);
}

console.log(calc(12,12,suma));




setTimeout(greeting,2000,'Andrea')

function greeting(name){
    console.log(`hola,${name}`);
}