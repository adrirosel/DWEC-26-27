import { DummyService } from "/services/dummy-service.js";

const productId = parseInt(localStorage.getItem("product-id"));

await showProductNameInTitle(productId);
await showDetails(productId);

async function showProductNameInTitle(productId) {
  const service = new DummyService();
  const product = await service.getProductById(productId);
  document.querySelector("#tH2Product").textContent = product.title;
}

async function showDetails(productId) {
  const service = new DummyService();
  const product = await service.getProductById(productId);

  const serialize = JSON.stringify(product);
  localStorage.setItem("product", serialize);

  const theProduct = JSON.parse(serialize);

  document.querySelector("#tImgProduct").src = product.thumbnail;
  document.querySelector("#tTxtPrice").value = product.price;
}
