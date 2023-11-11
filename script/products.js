const productId = new URLSearchParams(window.location.search).get("id");
const $products = document.querySelector(".products-main-content");

fetch(`https://api.escuelajs.co/api/v1/products/?categoryId=${productId}`)
  .then((response) => response.json())
  .then((data) => renderProductData(data));

function renderProductData(product) {
  const productFragment = document.createDocumentFragment();
  product.map((prdct) => {
    const a = document.createElement("a");
    a.className = "product-item";
    a.href = `/pages/product-info.html?id=${prdct.id}`;
    a.innerHTML = `
    <img src="/images/no-image.png" />
    <h2>${prdct.title}</h2>
    <p>${prdct.price + "$"}</p>
    `;
    productFragment.append(a);
  });
  $products.append(productFragment);
  console.log($products);
}
