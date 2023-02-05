const endpoint = "http://kea-alt-del.dk/t7/api/products/1532";

const productid = 1532;
const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${productid}.webp`;

function getData() {
  fetch(endpoint)
    .then((res) => res.json())
    .then(showProduct);
}

function showProduct(product) {
  console.log(product);
  document.querySelector(".product__view__brand").textContent = product.brandname;
  document.querySelector("#product__view__style").textContent = product.productdisplayname;
  document.querySelector("#product__view__category").textContent = product.category;
  document.querySelector("#product__view__color").textContent = "Color | " + product.basecolour;
  document.querySelector("#product__view__price").textContent = product.price + " DKK";
  document.querySelector("img").src = imagePath;
}

getData();
