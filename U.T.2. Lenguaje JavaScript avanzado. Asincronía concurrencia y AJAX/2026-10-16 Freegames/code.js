const categorias = await consumirEndPointCategorias();
añadirCategorias(categorias)

async function consumirEndPointCategorias(){
    const url = 'https://dummyjson.com/products/categories'

    const response = await fetch(url)
    const data = await response.json()

    return data;
}

function añadirCategorias(data){
    const nSelCategorias = document.getElementById('eSelCategorias')
    nSelCategorias.addEventListener('change', seleccionarCategoria)

    for(let categoria of data){
        const nOpt = document.createElement('option')
        nOpt.setAttribute('value', categoria.slug)
        nSelCategorias.appendChild(nOpt)
        nOpt.textContent = categoria.name;
    }
}

async function consumirEndPointCategoriaConcreta(categoria){
    const url = `https://dummyjson.com/products/category/${categoria}`

    const response = await fetch(url)
    const data = await response.json()

    return data;

}

async function seleccionarCategoria(e){
    const categoriaSlug = e.target.value;
    const data = await consumirEndPointCategoriaConcreta(categoriaSlug)

    const productos = data.products;

    mostrarCategoriaSeleccionda(productos)

}

function mostrarCategoriaSeleccionda(productos){
    const nSectionArticulo = document.getElementById('eSectionArticulo')

    nSectionArticulo.innerHTML = ''
    for(let producto of productos){
        
        

        const nArticle = document.createElement('article')
        nSectionArticulo.appendChild(nArticle)

        const nHeader = document.createElement('header')
        nArticle.appendChild(nHeader)

        nHeader.textContent = producto.title

        const nDiv = document.createElement('div')
        nArticle.appendChild(nDiv)
        nDiv.textContent = producto.price + '$'

        const nImg = document.createElement('img')
        nImg.setAttribute('src', producto.images[0])
        nImg.setAttribute('alt', 'imagenProducto')

        nArticle.appendChild(nImg)
    }
}

