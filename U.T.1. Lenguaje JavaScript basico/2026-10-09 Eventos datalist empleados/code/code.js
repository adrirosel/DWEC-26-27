import { empleados } from './empleados.js'

llenarDatalistEmpleados(empleados)
configurarEmpleadoCambiado();


/**
 * 
 * @param { [{ dni: number, nombre: string, apellido: string }] } empleados
 * @returns { undefined }
 */

function llenarDatalistEmpleados(empleados){
    const nDtlsEmpleados = document.getElementById('eDtlsEmpleados')

    empleados.forEach(empleado => {
       const nOptEmpleado = document.createElement('option')
        nDtlsEmpleados.appendChild(nOptEmpleado)

        nOptEmpleado.setAttribute('value', `${empleado.dni}`) 
        nOptEmpleado.setAttribute('label', `${empleado.nombre} ${empleado.apellido}`)
    })

}

function configurarEmpleadoCambiado(empleados){
    const nText = document.getElementById('eTxtEmpleado');
    nText.addEventListener('change', llenarDetalleEmpleado )
}

function llenarDetalleEmpleado(e){
    const dni = parseInt(e.target.value);

    const empleado = empleados.find(empleado => empleado.dni === dni);

    document.getElementById('eTxtNombre').setAttribute('value', empleado.nombre );
    document.getElementById('eTxtApellido').setAttribute('value', empleado.apellido);
    document.getElementById('eTxtEdad').setAttribute('value', empleado.edad);
    document.getElementById('eTxtCategoria').setAttribute('value', empleado.categoria);
    document.getElementById('eTxtSalario').setAttribute('value', empleado.salarioBruto);
}

