
const pokemons = await getPokemons()
// console.clear()
console.table(pokemons)


// console.table(getPokemons())
// async function getPokemons(){
//     const response = await fetch('https://pokeapi.co/api/v2/pokemon')
//     const data = await response.json()
//     return data.results
// }

// async function getPokemons(){
//     const response = await fetch('https://pokeapi.co/api/v2/pokemon')
//     const data = await response.json()


//     const pokemons = []
//     for(let pokemon of data.results){
//         const response = await fetch(pokemon.url)
//         const data = await response.json()
//         const pokemonAux = {
//             id: data.id,
//             name: data.name,
//             height: data.height,
//             weight: data.weight,
//             //image: data.sprites.other.home.front_default
//         }
//         pokemons.push(pokemonAux)
//         console.log(pokemonAux)
//     }
//     return pokemons
// }

// async function getPokemons(){
//     const response = await fetch('https://pokeapi.co/api/v2/pokemon')
//     const data = await response.json()


//     const pokemons = []
//     data.results.forEach(async pokemon =>{
//         const pokemonAux = await getPokemonByUrl(pokemon.url)
//         pokemons.push(pokemonAux)
//         console.log(pokemonAux)
//     })
    
//     return pokemons
// }

async function getPokemonByUrl(url){
    const response = await fetch(url)
    const data = await response.json()
    const pokemonAux = {
        id: data.id,
        name: data.name,
        height: data.height,
        weight: data.weight,
        image: data.sprites.other.home.front_default
    }
    return pokemonAux
}

async function getPokemons(){
    const response = await fetch('https://pokeapi.co/api/v2/pokemon')
    const data = await response.json()

    const promises = data.results.map(pokemon => getPokemonByUrl(pokemon.url));
    const pokemons = Promise.all(promises)

    
    return pokemons
}