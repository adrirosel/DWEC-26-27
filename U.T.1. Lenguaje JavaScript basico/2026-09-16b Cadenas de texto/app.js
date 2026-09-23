"use strict"

console.clear()

let nombre = "Adrian"
let apellidos = "Rosel Martinez"
let edad = 20
for (let char of nombre){
    console.log(char)
}

let mensaje1 = 'Hola soy ' + nombre //Forma cutre

console.log(mensaje1)


// Interpolacion de cadenas

console.log(`Hola soy ${nombre} ${apellidos}`) //Usando template literals
// console.log(`Hola soy ${nombre + ' ' + apellidos}`)
console.log(`Hola soy ${nombre} ${apellidos} y tengo ${edad+ 1} años` )

console.log(`Hola, soy ${nombre}, y soy ${edad < 18 ? 'menor' : 'mayor'} de edad`)
