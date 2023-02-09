const urlParams = new URLSearchParams(window.location.search),
  id = urlParams.get("id"),
  url = `http://kea-alt-del.dk/t7/api/products/${id}`,
  imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;
function showProduct(e) {
  (document.querySelector(".product__view__brand").textContent = e.brandname),
    (document.querySelector("#product__view__style").textContent = e.productdisplayname),
    (document.querySelector("#product__view__category").textContent = e.category),
    (document.querySelector("#product__view__color").textContent = "Color | " + e.basecolour),
    (document.querySelector("#product__view__price").textContent = e.price + " DKK"),
    (document.querySelector("img").src = imagePath);
}
fetch(url)
  .then((e) => e.json())
  .then(showProduct),
  getData();
