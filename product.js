const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = `http://kea-alt-del.dk/t7/api/products/${id}`;
const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;

fetch(url)
  .then((res) => res.json())
  .then(showProduct);

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
