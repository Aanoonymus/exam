"use strict";

const $categories = document.querySelector(".categories");
const $dealsWrapper = document.querySelector(".deals-wrapper");
const $first = document.querySelector(".first");

function loadHeroData() {
  fetch("https://api.escuelajs.co/api/v1/categories")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const productFragment = document.createDocumentFragment();
      data.forEach((categorie) => {
        const product = document.createElement("a");
        product.className = "categories-item";
        product.href = `/pages/products.html?id=${categorie.id}`;
        product.innerHTML = `
          <img src="./images/no-image.png">
      <p>${categorie.name}</p>
      `;
        productFragment.append(product);
      });
      $categories.append(productFragment);
    });
}
loadHeroData();

function loadDealsData() {
  fetch("https://api.escuelajs.co/api/v1/products")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const dealFragment = document.createDocumentFragment();
      data.forEach((item) => {
        const dealsItem = document.createElement("div");
        dealsItem.className = "deals-wrapper-item";
        dealsItem.innerHTML = `
      <img src="./images/no-image.png"/>
      <h3 class="deals-wrapper-item-title">${item.title}</h3>
      <p class="deals-wrapper-item-price">${item.price + "$"}</p>
      `;
        dealFragment.append(dealsItem);
      });
      $dealsWrapper.append(dealFragment);
    });
}
loadDealsData();
