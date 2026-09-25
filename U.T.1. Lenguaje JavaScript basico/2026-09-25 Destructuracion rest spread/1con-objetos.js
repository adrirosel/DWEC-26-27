// Desestructurar nos permite extraer a mas de una variable partes 
//de un objeto complejo en una unica linea

const person = {
    firstName: 'Adrian', 
    lastName: 'Rosel', 
    age: 20, 
    eyes: 'brown', 
    height: 183, 
    weight: 72
}

// const height = person.height;
// const weight = person.weight;

// Desesctructuracion de objetos

// const {height, weight} = person;

// console.log(height, weight);
// console.clear();


// const {height : altura, weight : peso} = person;
// console.log(height, weight)

// Operador rest ... permite guardar en una variable todas las variables que no hemos usado

const { firstName, eyes, ...rest } = person
console.log(firstName, eyes, rest)

// Operador spread ... perimte descomponer un elemento en todas sus partes 

const teacher = {...person, 
    subjects: ['dwec', 'diw'],
    departament: 'tic'
}

console.log(teacher);

// function getFullName(person){
//     return `${person.firstName} ${person.lastName}`
// }

console.clear();
console.log(getFullName(person))

const getFullName = ({firstName, lastName})=>`${firstName} ${lastName}`

function conseguirMasaCorporal({height: altura, weight:masa}){
    return masa / Math.pow(altura/100, 2);
}