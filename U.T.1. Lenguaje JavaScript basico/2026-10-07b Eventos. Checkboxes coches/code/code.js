import { vehicles } from './data.js'

function crearCheckBoxes(vehicles){
    const nDivOpciones = document.getElementById('eDivOpciones')

    for(let vehicle of vehicles){
        const nInp = document.createElement('input')
        nInp.addEventListener('click', añadirATabla)
        nDivOpciones.appendChild(nInp)
        nInp.setAttribute('type', 'checkbox')
        nInp.setAttribute('id', `eChk${vehicle.key}`)
        nInp.setAttribute('value',vehicle.key)

        const nLabel = document.createElement('label')
        nDivOpciones.appendChild(nLabel)
        nLabel.setAttribute('for', `eChk${vehicle.key}`)
        nLabel.textContent = vehicle.model
    }
}

crearCheckBoxes(vehicles)

function añadirATabla(e){
    const nTbodyTabla = document.getElementById('eTbodyTabla')

    const nTr = document.createElement('tr')
    nTbodyTabla.appendChild(nTr)

    const nTd1 = document.createElement('td')
    nTr.appendChild(nTd1)

    const nTd2 = document.createElement('td')
    nTr.appendChild(nTd2)

    const keyVehicle = e.target.value
    console.log(keyVehicle)

    const vehicle = vehicles.find(vehicle => vehicle.key === keyVehicle)
    
    const nImg = document.createElement('img')
    nTd2.appendChild(nImg)

    nImg.setAttribute('src', `./photos/${vehicle.photo}`)

    nTd1.textContent = vehicle.model

}