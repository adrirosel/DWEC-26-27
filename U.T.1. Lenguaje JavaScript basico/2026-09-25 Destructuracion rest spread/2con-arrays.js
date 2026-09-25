import {empleados} from "./empleados.js" 

// const categorias = empleados.map(empleado => empleado.categoria)

// console.table(categorias);

const categorias = empleados.map(({categoria}) => categoria)
console.table(categorias)