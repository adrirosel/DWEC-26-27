'use strict';

let frutas = new Array();
frutas.push("Manzana", 'Platano', 'Pera', 'Sandia');
frutas.push('Naranja');
frutas.push('limon', 'aguacate', 'melon');

console.clear();

console.log(frutas.length);
console.table(frutas);

// Primera forma. Bucle de toda la vida

for(let i = 0; i<frutas.length; i++){
    console.log(i, frutas[i]);
}

// Segunda forma. ForEach de posicion o in

for (let i in frutas){
    console.log(i, frutas[i]);
}

// Tercera forma. Foreach de tipo of
for(let fruta of frutas){
    console.log(fruta);
}

//Cuarta forma. Metodos de la clase Array

console.clear();
// Forma 4.1

// function mostrarFruta(fruta){
//     console.log(fruta);
// }

const mostrarFruta = (fruta)=>{
    console.log(fruta)
}

frutas.forEach(mostrarFruta) //Callback

frutas.forEach(frutas =>{
    console.log(frutas);
})

//Forma 4.2. La funcion no se usa en otros sitios

frutas.forEach(function mostrarFruta(fruta){
    console.log(fruta)
})

//Forma 4.3. La funcion es anonima
console.clear();
frutas.forEach(frutas =>{
    console.log(frutas);
})

frutas.forEach(function (fruta){
    console.log(fruta)
});

console.clear();

//Forma 4.4 Funcion flecha 

console.clear();

frutas.forEach(frutas =>{
    console.log(frutas);
})

//Si la funcion solo tiene una linea, se le pueden quitar las llaves y escribir la expresion entera en una sola linea de codigo

//Si no hay llaves y hay un return, quitamos el return.

frutas.forEach(frutas => console.log(frutas))

// Forma 4.5 Podemos guardar la lambda en una variable para que se sepa lo que hace

const mostrarFruta2 = fruta => console.log(fruta)

frutas.forEach(mostrarFruta2);


