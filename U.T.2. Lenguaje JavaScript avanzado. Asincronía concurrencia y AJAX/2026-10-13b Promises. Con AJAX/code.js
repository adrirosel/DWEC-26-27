// const response = fetch('https://pokeapi.co/api/v2/pokemon');


// fetch evuelve una promesa.
//Forma antigua. Accedemos al resultado de la promesa empleando el método then pasando un callback. 
//Necesitamos un segundo then para procesar correctamente el json
// response
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

// console.log('FIN'); 

// Forma moderna - async / await

//Una función asíncrona devuelve una promesa
async function retrievePokemons(){
    const response = await fetch('https://pokeapi.co/api/v2/pokemon')
    const data = await response.json();
    return data;
}

const data = await retrievePokemons();
console.log(data);
console.log('FIN');
