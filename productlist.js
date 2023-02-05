fetch("http://kea-alt-del.dk/t7/api/products?start=100")
  .then((res) => res.json())
  .then(showData);

const template = document.querySelector("#product__card__template").content;
const container = document.querySelector(".products");

function showData(data) {
  console.log(data);
  data.forEach((item) => {
    const clone = template.cloneNode(true);
    clone.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${item.id}.webp`;
    clone.querySelector(".product__card__info__brand").textContent = "Brand | " + item.brandname;
    clone.querySelector(".product__card__info__title").textContent = item.productdisplayname;
    clone.querySelector(".product__card__info__category").textContent = "Category | " + item.category;
    clone.querySelector(".product__card__price").textContent = item.price + " DKK";
    if (item.soldout) {
      clone.querySelector("article").classList.add("sold-out");
      clone.querySelector(".product__card__buy__button").innerHTML = "SOLD OUT";
    }
    if (item.discount) {
      clone.querySelector(".product__card__price").classList.add("discount");
      clone.querySelector(".product__card__content").classList.add("discount-box");
      let newPrice = item.price - item.price * (item.discount / 100);
      let newPriceSpan = document.createElement("span");
      newPriceSpan.innerHTML = newPrice + " DKK";
      newPriceSpan.classList.add("new-price");
      newPriceSpan.classList.remove("discount");
      clone.querySelector(".product__card__price").appendChild(newPriceSpan);
    }
    container.appendChild(clone);
  });
}
