fetch("http://kea-alt-del.dk/t7/api/categories")
  .then((res) => res.json())
  .then(showCategories);

const template = document.querySelector("#category-button").content;
const container = document.querySelector(".category");

function showCategories(data) {
  data.forEach((category) => {
    const clone = template.cloneNode(true);
    clone.querySelector("a").textContent = category.category;
    clone.querySelector("a").href = `shop.html?category=${category.category}`;
    container.appendChild(clone);
  });
}

const shopAllLink = document.querySelector("#shop-all");
shopAllLink.href = "shop.html";
