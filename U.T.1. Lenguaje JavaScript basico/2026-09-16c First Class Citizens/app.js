"use strict"

console.clear()
console.log("En JavaScript, las funciones son ciudadanos de primera clase.")

function devolverSiete(){
    return 7
}

const esMayorDeEdad = (edad) =>{ //Puedo almacenar una funcion dentro de una variable
    return edad <18 ? 'true' : 'false'
}

console.log(esMayorDeEdad(19))
console.log(devolverSiete)
console.log(devolverSiete())

let getSeven = devolverSiete //Puedo almacenar una funcion dentro de una variable
console.log(getSeven())

//---------------------------------------------------------------------------------

const sumar = (a, b) =>{return a + b}

const restar = (a, b) =>{return a - b}

// function operarYMostrarResultado(operacion, a, b){
//     console.log(operacion(a, b))
// }

const operarYMostrarResultado = (operacion, a, b) =>{console.log(operacion(a, b))}

//callback: funcion que se pasa como argumento a otra funcion
operarYMostrarResultado(sumar, 5, 3)
operarYMostrarResultado(restar, 5, 3)

