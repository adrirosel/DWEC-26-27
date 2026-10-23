const response = await fetch('https://pokeapi.co/api/v2/pokemon');

const data = await response.json();
const results = data.results;

const nOl = document.getElementById('eOlPokemons')
for(let result of results){
    const nLi = document.createElement('li')
    nOl.appendChild(nLi)
    const nA = document.createElement('a')
    nLi.appendChild(nA)
    nA.setAttribute('href', result.url)
    nA.textContent = result.name
}