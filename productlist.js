const urlParams = new URLSearchParams(window.location.search),
  category = urlParams.get("category"),
  url = `http://kea-alt-del.dk/t7/api/products/${category}`;
(allProducts = "https://kea-alt-del.dk/t7/api/products"),
  category && (allProducts = `https://kea-alt-del.dk/t7/api/products?category=${category}`),
  fetch(allProducts)
    .then((t) => t.json())
    .then(showData);
const template = document.querySelector("#product__card__template").content,
  container = document.querySelector(".products"),
  discountBox = document.querySelector(".discount-box");
function showData(t) {
  t.forEach((t) => {
    const e = template.cloneNode(!0);
    if (
      ((e.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${t.id}.webp`),
      (e.querySelector(".product__card__info__brand").textContent = "Brand | " + t.brandname),
      (e.querySelector(".product__card__info__title").textContent = t.productdisplayname),
      (e.querySelector(".product__card__info__category").textContent = "Category | " + t.category),
      (e.querySelector(".product__card__price").textContent = t.price + " DKK"),
      (e.querySelector("a").href = "product.html?id=" + t.id),
      t.soldout && (e.querySelector(".product__card__buy__button").classList.add("sold-out"), (e.querySelector(".product__card__buy__button").innerHTML = "SOLD OUT")),
      t.discount)
    ) {
      e.querySelector(".product__card__price").classList.add("discount"), e.querySelector(".product__card__price").classList.add("line-through");
      let r = (t.price - t.price * (t.discount / 100)).toFixed(0),
        c = document.createElement("span");
      (c.innerHTML = r + " DKK"), c.classList.add("new-price"), e.querySelector(".flex--container").appendChild(c);
      let o = t.discount,
        a = document.createElement("span");
      (a.innerHTML = o + "% OFF"), a.classList.add("discount-box"), e.querySelector(".flex--container").appendChild(a);
    }
    container.appendChild(e);
  });
}
