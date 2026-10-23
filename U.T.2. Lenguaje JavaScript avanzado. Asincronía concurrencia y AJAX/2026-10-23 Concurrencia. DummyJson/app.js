const products = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 33, 37];

const nTbody = document.getElementById('tTbdProducts');

//Solucion 1. Secuencial

// for(const productId of products){
//     const url = `https://dummyjson.com/products/${productId}?delay=1000`;
//     const response = await fetch(url);
//     const product = await response.json();
    
//     const nTr = document.createElement('tr');
//     nTbody.appendChild(nTr);

//     const nTdId = document.createElement('td')
//     nTr.appendChild(nTdId)
//     nTdId.textContent = product.id

//     const nTdName = document.createElement('td');
//     nTr.appendChild(nTdName);
//     const nTdImage = document.createElement('td');
//     nTr.appendChild(nTdImage);

//     nTdName.textContent = product.title;

//     const nImg = document.createElement('img');
//     nImg.setAttribute('src', product.images[0]);

//     nTdImage.appendChild(nImg);
// }

//Solucion 2. Concurrente desordenada
// async function getProductById(productId){

//     const url = `https://dummyjson.com/products/${productId}?delay=1000`;
//     const response = await fetch(url);
//     const product = await response.json();
//     return product;
// }

// products.forEach(async productId => {
//     const product = await getProductById(productId)
    
//     const nTr = document.createElement('tr');
//     nTbody.appendChild(nTr);
        
//     const nTdId = document.createElement('td')
//     nTr.appendChild(nTdId)
//     nTdId.textContent = product.id
    
//     const nTdName = document.createElement('td');
//     nTr.appendChild(nTdName);
//     const nTdImage = document.createElement('td');
//     nTr.appendChild(nTdImage);
    
//     nTdName.textContent = product.title;
    
//     const nImg = document.createElement('img');
//     nImg.setAttribute('src', product.images[0]);
    
//     nTdImage.appendChild(nImg);
// })



//Solucion 3. Concurrente ordenada

async function getProductById(productId){

    const url = `https://dummyjson.com/products/${productId}?delay=1000`;
    const response = await fetch(url);
    const product = await response.json();
    return product;
}

const promises = products.map(productId => getProductById(productId))

const productsAux = await Promise.all(promises);

productsAux.forEach(product => {
    
    const nTr = document.createElement('tr');
    nTbody.appendChild(nTr);
        
    const nTdId = document.createElement('td')
    nTr.appendChild(nTdId)
    nTdId.textContent = product.id
    
    const nTdName = document.createElement('td');
    nTr.appendChild(nTdName);
    const nTdImage = document.createElement('td');
    nTr.appendChild(nTdImage);
    
    nTdName.textContent = product.title;
    
    const nImg = document.createElement('img');
    nImg.setAttribute('src', product.images[0]);
    
    nTdImage.appendChild(nImg);
})


