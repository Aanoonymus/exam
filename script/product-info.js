const productId = new URLSearchParams(window.location.search).get("id");
const $productCharac = document.querySelector(".product-info-content");

function loadProductData() {
  fetch(`https://api.escuelajs.co/api/v1/products/?categoryId=${productId}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const proFragment = document.createDocumentFragment();
      const product = document.createElement("div");
      product.innerHTML = `
        <h2>${data.title}</h2>
        <p>${data.description}</p>
        <p>${data.price}</p>
        `;
      proFragment.append(product);
      console.log(proFragment);
    });
  $productCharac.append();
}
loadProductData();
