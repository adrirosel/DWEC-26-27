// const params = new URLSearchParams(window.location.search);
// const categoryId = params.get("category");

const categoryId = window.localStorage.getItem("category");

if (categoryId) {
  document.querySelector("#tH1Title").textContent =
    "Productos de la categoría " + categoryId;
} else {
  document.querySelector("#tH1Title").textContent = "Productos";
}
