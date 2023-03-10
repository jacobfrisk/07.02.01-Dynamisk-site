fetch("http://kea-alt-del.dk/t7/api/categories")
  .then((e) => e.json())
  .then(showCategories);
const template = document.querySelector("#category-button").content,
  container = document.querySelector(".category");
function showCategories(e) {
  e.forEach((e) => {
    const t = template.cloneNode(!0);
    (t.querySelector("a").textContent = e.category), (t.querySelector("a").href = `shop.html?category=${e.category}`), container.appendChild(t);
  });
}
const shopAllLink = document.querySelector("#shop-all");
shopAllLink.href = "shop.html";
