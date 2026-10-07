import { vehicles } from './data.js'

// console.table(vehicles)
añadirCochesAlDesplegable(vehicles)

function añadirCochesAlDesplegable(vehicles){
    const nSctCoches = document.getElementById('eSctCoches')
    nSctCoches.addEventListener('change', mostrarImagen)
    for(let v of vehicles){
        const nOpt = document.createElement('option')
        nSctCoches.appendChild(nOpt)
        nOpt.setAttribute('value', v.key)
        nOpt.textContent = v.model
    }
}


function mostrarImagen(e){
    const nImgCoches = document.getElementById('eImgCoche')
    const nSct = e.target;
    //La propiedad value me devuelve el valro del option seleccionado
    const keyVehicle = nSct.value
    const vehicle = vehicles.find(vehicle => vehicle.key === keyVehicle)

    nImgCoches.setAttribute('src', `./photos/${vehicle.photo}`)
}

