// // "use strict"

// // 4 formas 

// edad1 = 10 // variable global
// var edad2 = 12 // Forma antigua
// const edad4 = 14 //Forma moderna ES6 (declaracion de constantes)
// //Ambito
// {
//     let edad3 = 13 // Forma moderna ES6
//     console.log(edad3)

//     console.log(edad2) //Edad2 esta en un ambito mas global
//     {
//         let edad5 = 15
//         console.log(edad5)
//         console.log(edad3)
//     }
//     console.log(edad5) //Error (edad5 is not defined)
// }
// // console.log(edad3) //Error de scope


const testAmbito = ()=>{
    for(let i = 1; i<=3; i++){
        console.log(i, edad) //Undefined
    }
    
    var edad = 10 //hoisting
    // console.log(i, edad)//Error de scope en la i
}
testAmbito()
let array = [1, 2, 3]
array.forEach(element => {
    console.log(element)
});