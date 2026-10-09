import { empleados } from './empleados.js'

function llenarDatalistEmpleados(em){
    const nDtlsEmpleados = document.getElementById('eDtlsEmpleados')

    em.forEach(empleado => {
       const nOptEmpleado = document.createElement('option')
        nDtlsEmpleados.appendChild(nOptEmpleado)

        nOptEmpleado.setAttribute('value', `${empleado.nombre} ${empleado.apellido}`) 
    })

}

llenarDatalistEmpleados(empleados)

