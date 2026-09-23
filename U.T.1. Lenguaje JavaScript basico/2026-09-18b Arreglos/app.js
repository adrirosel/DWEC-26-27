console.clear();
// Primera forma. Literal de arreglo
let diasSemana = [
    'Lunes', 
    'Martes', 
    'Miercoles', 
    'Jueves', 
    'Viernes', 
    'Sabado', 
    'Domingo'
];

console.log(diasSemana);

diasSemana.forEach(dia => {
    console.log(dia)
});

console.table(diasSemana);

// Segunda forma. Indicando la posicion

frutas = [];
frutas[0] = 'Pera';
frutas[1] = 'Manzana';
frutas[5] = 'Platano';
frutas[6] = 'Mango';

console.table(frutas);

// Tercera forma. Clase Array

const alumnos = new Array();
alumnos[0] = 'Adrian';
alumnos.push('Jose');
console.table(alumnos);

alumnos.unshift('Alvaro');

console.table(alumnos);
//Operador spread
alumnos.push(...['Francisco', 'Francisco Mulero', 'Daniel', 'Alexander', 'Miguel', 'Belzunce', 'Aymen']);
console.table(alumnos);

// Cuarta forma. Array asociativo

let mesesDelAño1 = [{
     1 : 'Enero', 
     2 : 'Febrero',
     3 : 'Marzo'
}];

let mesesDelAño = [];
mesesDelAño['en'] = 'enero';
mesesDelAño['fe'] = 'febrero';
mesesDelAño['ma'] = 'marzo';
mesesDelAño['ab'] = 'abril';
mesesDelAño['my'] = 'mayo';
mesesDelAño['ju'] = 'junio';
mesesDelAño['jl'] = 'julio';

console.log(mesesDelAño)
console.table(mesesDelAño)

console.log(mesesDelAño['ma']);