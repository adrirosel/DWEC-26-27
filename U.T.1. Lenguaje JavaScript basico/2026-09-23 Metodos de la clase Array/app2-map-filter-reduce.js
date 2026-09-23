import { empleados } from './empleados.js';

// mapear es cambiar cada elemento del array por otro elemento

// function obtenerNombreCompleto(empleado){
//     return `${empleado.nombre} ${empleado.apellido}`
// }

const obtenerNombreCompleto = empleado => `${empleado.nombre} ${empleado.apellido}`

const nombres = empleados.map(obtenerNombreCompleto)
console.log(nombres);
console.log(nombres.length);

console.clear();

function obtenerNombreYSalario(empleado){
    return {
        nombre : empleado.nombre, 
        salario : empleado.salarioBruto
    }
}

const nombresYSalarios = empleados.map(obtenerNombreYSalario)

console.table(nombresYSalarios);

console.clear();

// Mostrar nombre y correo electronico de los gerentes

const esGerente = empleado=> empleado.categoria === 'gerente' 
const nombreYCorreoElectronico = empleado => ({nombre : empleado.nombre, correo : empleado.correoElectronico})


const datosGerentes = empleados
    .filter(esGerente)
    .map(nombreYCorreoElectronico)

console.table(datosGerentes)