fetch("http://kea-alt-del.dk/t7/api/categories")
  .then((res) => res.json())
  .then(showCategories);

const template = document.querySelector("#category-button").content;
const container = document.querySelector(".category");
const button = document.querySelector(".button");

function showCategories(data) {
  data.forEach((category) => {
    const clone = template.cloneNode(true);
    clone.querySelector("a").textContent = category.category;
    container.appendChild(clone);
  });
}
