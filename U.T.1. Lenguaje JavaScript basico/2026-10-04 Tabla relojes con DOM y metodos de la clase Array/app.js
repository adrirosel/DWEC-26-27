import { datosVentasRelojes } from './datos.js'


//Cuales son los paises
const paises = new Set()
datosVentasRelojes.forEach(reloj => paises.add(reloj.pais))


const nUl = document.getElementById('paises')
for(let pais of paises){
    const nLiPais = document.createElement('li')
    nLiPais.textContent = pais
    nUl.appendChild(nLiPais)

}


//Total de ventas

const totalVentas = datosVentasRelojes.reduce((acc, item) => acc + item.ventas, 0)

const mensaje1 = `${totalVentas}€`
const nPaTotalVentas = document.createElement('p')
const nDatosRelojes = document.querySelector('.datosRelojes')
nDatosRelojes.appendChild(nPaTotalVentas)
const negrita = document.createElement('strong')
negrita.textContent = 'Total de ventas:'
nPaTotalVentas.appendChild(negrita) 

nPaTotalVentas.append(` ${mensaje1}`)

// Total de ventas de Suiza

const totalVentasSuiza = datosVentasRelojes.filter(reloj => reloj.pais === "Suiza")
                                           .reduce((acc, item) => acc+ item.ventas, 0)

const nPaTotalVentasSuiza = document.createElement('p')
nDatosRelojes.appendChild(nPaTotalVentasSuiza)
const negrita2 = document.createElement('strong')
nPaTotalVentasSuiza.appendChild(negrita2)
negrita2.textContent = 'Total de ventas de Suiza: '

nPaTotalVentasSuiza.append(totalVentasSuiza,'€')
// Total de Rolex en 2023

const totalVentasRolex = datosVentasRelojes.filter(reloj => reloj.marca === "Rolex" && reloj.año === 2023)
                                            .reduce((acc, item) => acc + item.ventas, 0)


const nPaTotalVentasRolex2023 = document.createElement('p')
nDatosRelojes.appendChild(nPaTotalVentasRolex2023)
const negrita3 = document.createElement('strong')
nPaTotalVentasRolex2023.appendChild(negrita3)
negrita3.textContent = 'Total de ventas de Rolex en 2023: '
nPaTotalVentasRolex2023.append(totalVentasRolex,'€')

//Cuál es el máximo vendido de cualquier marca en cualquier año.

const relojMasVendido = datosVentasRelojes.reduce((max, reloj)=>
    reloj.ventas > max.ventas ? reloj : max
)

const nH3 = document.createElement('h3')
nDatosRelojes.appendChild(nH3)
nH3.textContent = 'Máximo vendido de cualquier marca en cualquier año:'

const nListaCaracteristicas = document.createElement('ul')
nDatosRelojes.appendChild(nListaCaracteristicas)

const nLiMarca = document.createElement('li')
nListaCaracteristicas.appendChild(nLiMarca)
nLiMarca.textContent ='Marca: '
nLiMarca.append(relojMasVendido.marca)

const nLiAño = document.createElement('li')
nListaCaracteristicas.appendChild(nLiAño)
nLiAño.textContent ='Año: '
nLiAño.append(relojMasVendido.año)

const nLiVentas = document.createElement('li')
nListaCaracteristicas.appendChild(nLiVentas)
nLiVentas.textContent ='Ventas: '
nLiVentas.append(relojMasVendido.ventas,'€')

// Qué marca tuvo mas ventas en 2023

const marcaMasVendidaen2023 = datosVentasRelojes.filter(reloj => reloj.año === 2023)
                                                .reduce((max, reloj)=>{
                                                    return reloj.ventas > max.ventas ? reloj : max
                                                })
                                                .marca

const nPaMarcaMasVendida = document.createElement('p')
nDatosRelojes.appendChild(nPaMarcaMasVendida)
const resaltado = document.createElement('strong')
nPaMarcaMasVendida.appendChild(resaltado)
resaltado.textContent='Marca más vendida en 2023: '
nPaMarcaMasVendida.append(`${marcaMasVendidaen2023}`)