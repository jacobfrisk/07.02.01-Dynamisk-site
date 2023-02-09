const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");
const url = `http://kea-alt-del.dk/t7/api/products/${category}`;

allProducts = "https://kea-alt-del.dk/t7/api/products";
if (category) {
  allProducts = `https://kea-alt-del.dk/t7/api/products?category=${category}`;
}

fetch(allProducts)
  .then((res) => res.json())
  .then(showData);

const template = document.querySelector("#product__card__template").content;
const container = document.querySelector(".products");
const discountBox = document.querySelector(".discount-box");

function showData(data) {
  console.log(data);
  data.forEach((item) => {
    const clone = template.cloneNode(true);
    clone.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${item.id}.webp`;
    clone.querySelector(".product__card__info__brand").textContent = "Brand | " + item.brandname;
    clone.querySelector(".product__card__info__title").textContent = item.productdisplayname;
    clone.querySelector(".product__card__info__category").textContent = "Category | " + item.category;
    clone.querySelector(".product__card__price").textContent = item.price + " DKK";
    clone.querySelector("a").href = "product.html?id=" + item.id;
    if (item.soldout) {
      clone.querySelector(".product__card__buy__button").classList.add("sold-out");
      clone.querySelector(".product__card__buy__button").innerHTML = "SOLD OUT";
    }
    if (item.discount) {
      clone.querySelector(".product__card__price").classList.add("discount");
      clone.querySelector(".product__card__price").classList.add("line-through");
      let newPrice = (item.price - item.price * (item.discount / 100)).toFixed(0);
      let newPriceSpan = document.createElement("span");
      newPriceSpan.innerHTML = newPrice + " DKK";
      newPriceSpan.classList.add("new-price");
      clone.querySelector(".flex--container").appendChild(newPriceSpan);
      let discountPercentage = item.discount;
      let discountPercentageSpan = document.createElement("span");
      discountPercentageSpan.innerHTML = discountPercentage + "% OFF";
      discountPercentageSpan.classList.add("discount-box");
      clone.querySelector(".flex--container").appendChild(discountPercentageSpan);
    }

    container.appendChild(clone);
  });
}
