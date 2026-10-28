// const categories = [
//     {id: 'patos', name: 'Patos'},
//     {id: 'gatos', name: 'Gatos'},
//     {id: 'perros', name: 'Perros'},
// ]

import DummyRestService from "./dummy-rest-service.js";
import { openSpinner, closeSpinner } from "./spinner.js";

await setup();

async function setup() {
  const service = new DummyRestService();
  openSpinner();
  const categories = await service.getCategories();
  renderTableCategories(categories);
  closeSpinner();
}

function renderTableCategories(categories) {
  const nTbody = document.querySelector("#tTabCategories>tbody");
  // nTbody.addEventListener('click', )

  categories.forEach(({ id, name }) => {
    const nTr = nTbody.appendChild(document.createElement("tr"));

    const nTdName = nTr.appendChild(document.createElement("td"));
    nTdName.dataset.id = id;
    nTdName.textContent = name;
    nTdName.addEventListener("click", categoryClickedHandler);

    const nTdPhoto = nTr.appendChild(document.createElement("td"));
    nTdPhoto.textContent = name;
  });
}

async function categoryClickedHandler(e) {
  const categoryId = e.target.dataset.id;
  const service = new DummyRestService();
  openSpinner();
  const products = await service.getProductsByCategory(categoryId);
  renderTableProducts(products);
  closeSpinner();
}

function renderTableProducts(products) {
  const nTbody = document.querySelector("#tTabProducts>tbody");
  // nTbody.addEventListener('click', )
  nTbody.innerHTML = "";

  products.forEach(({ id, name, price, image }) => {
    const nTr = nTbody.appendChild(document.createElement("tr"));

    const nTdName = nTr.appendChild(document.createElement("td"));
    nTdName.textContent = name;

    const nTdPrice = nTr.appendChild(document.createElement("td"));
    nTdPrice.textContent = price;

    const nTdPhoto = nTr.appendChild(document.createElement("td"));
    const nImg = nTdPhoto.appendChild(document.createElement("img"));
    nImg.src = image;
  });
}
