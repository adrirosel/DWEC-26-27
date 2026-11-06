import { DummyService } from "/services/dummy-service.js";

const params = new URLSearchParams(window.location.search);
const productId = params.get("product");

await showProductNameInTitle(productId);

async function showProductNameInTitle(productId) {
  const service = new DummyService();
  const product = await service.getProductById(productId);
  document.querySelector("#tH2Product").textContent = product.title;
}

