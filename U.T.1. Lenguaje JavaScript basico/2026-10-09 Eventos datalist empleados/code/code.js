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
    const dniEmpleado = parseInt(e.target.value);

    const {nombre, apellido, edad, categoria, salarioBruto: salario} = empleados.find(({dni}) => dni === dniEmpleado);

    document.getElementById('eTxtNombre').setAttribute('value', nombre );
    document.getElementById('eTxtApellido').setAttribute('value', apellido);
    document.getElementById('eTxtEdad').setAttribute('value', edad);
    document.getElementById('eTxtCategoria').value = categoria
    document.getElementById('eTxtSalario').value = salario

    

}

