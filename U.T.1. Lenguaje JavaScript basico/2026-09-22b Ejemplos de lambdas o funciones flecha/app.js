'use strict';


function factorial(numero){
    if(numero === 1) return 1
    return numero * factorial(numero - 1);
}

console.log(factorial(5));

const factorial2 = numero =>{
    if(numero === 1)return 1
    return numero*factorial2(numero - 1)
}

console.log(factorial2(3))
console.log(factorial2(6))

const factorial3 = numero => numero === 1 ? 1 : numero * factorial3(numero-1)
console.log(factorial3(6))

