'use strict';

console.clear();

function mostrarMensaje(nombre = 'Adrian', 
                        apellidos = 'Rosel Martinez', 
                        poblacion = 'Lorca', 
                        pais = 'España'){
    console.log(`Hola, soy ${nombre} ${apellidos}. Vivo en ${poblacion} y naci en ${pais}`)
}
mostrarMensaje();

mostrarMensaje('Maria', 'Sanchez Lopez');
mostrarMensaje(undefined, 'Martinez Rosel', undefined, 'Francia');//Usar undefined, null no

// esto funciona en python pero no en JavaScript
// mostrarMensaje(nombre = 'Gunter', pais = 'Alemania');
