fetch("http://kea-alt-del.dk/t7/api/categories")
  .then((res) => res.json())
  .then(showCategories);

const categoryTemplate = document.querySelector("#category-button").content;
const categoryContainer = document.querySelector(".category");

function showCategories(kategorier) {
  kategorier.forEach((category) => {
    console.log(kategorier);
    const clone = categoryTemplate.cloneNode(true);
    clone.querySelector("a").textContent = category.category;
    categoryContainer.appendChild(clone);
    clone.querySelector("a").addEventListener("click", function () {
      if (clone.querySelector("a").textContent === category.category) {
        fetch(`http://kea-alt-del.dk/t7/api/products?category=${category.category}`)
          .then((res) => res.json())
          .then(showData);
      }
    });
  });
}

fetch("http://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then(showData);

const productTemplate = document.querySelector("#product__card__template").content;
const productContainer = document.querySelector(".products");

function showData(data) {
  //   console.log(data);
  productContainer.innerHTML = "";
  data.forEach((item) => {
    const clone = productTemplate.cloneNode(true);
    clone.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${item.id}.webp`;
    clone.querySelector(".product__card__info__brand").textContent = "Brand | " + item.brandname;
    clone.querySelector(".product__card__info__title").textContent = item.productdisplayname;
    clone.querySelector(".product__card__info__category").textContent = "Category | " + item.category;
    clone.querySelector(".product__card__price").textContent = item.price + " DKK";
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
