// Conjuntos

const frutas = new Set();

frutas.add('Manzana');
frutas.add('Pera');
frutas.add('Manzana');
frutas.add('Fresa');
frutas.add('Manzana');


frutas.forEach((fruta)=>{
    console.log(fruta);
})

console.clear();


console.log(frutas.size);

console.table(frutas);

const frutasComoArrego = Array.from(frutas)

console.table(frutasComoArrego.sort());

