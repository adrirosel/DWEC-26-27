import { empleados } from "./empleados.js";

console.log("Número de empleados: ", empleados.length);

console.clear();

function mostrarNombreCompleto(empleado, i) {
  console.log(i, `${empleado.nombre} ${empleado.apellido}`);
}

empleados.forEach(mostrarNombreCompleto);

console.clear();

function esInformatico(empleado) {
  return empleado.categoria === "informatico";
}
console.clear();
const informaticos = empleados.filter(esInformatico);
console.log("Numero de informaticos: ", informaticos.length);

function esAdministrativo(empleado) {
  return empleado.categoria === "administrativo";
}

function tieneOjosAzules(empleado) {
  return empleado.colorOjos === "azul";
}

const administrativosDeOjosAzules = empleados
  .filter(esAdministrativo)
  .filter(tieneOjosAzules);

console.clear();
console.log(
  "Numero de administrativos con ojos azules: ",
  administrativosDeOjosAzules.length,
);
