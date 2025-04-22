const productList = [
  { name: "Laptop", category: "tech", price: 999, rating: 4.5 },
  { name: "Book", category: "books", price: 20, rating: 4.8 },
  { name: "Smartphone", category: "tech", price: 599, rating: 4.6 }
];

function displayProducts(list) {
  const ul = document.getElementById("products");
  ul.innerHTML = "";
  list.forEach(p => {
    const li = document.createElement("li");
    li.textContent = `${p.name} - $${p.price} - ⭐ ${p.rating}`;
    ul.appendChild(li);
  });
}

function filterProducts() {
  const category = document.getElementById("filter").value;
  const filtered = category === "all" ? productList : productList.filter(p => p.category === category);
  displayProducts(filtered);
}

function sortProducts() {
  const criterion = document.getElementById("sort").value;
  const sorted = [...productList].sort((a, b) => a[criterion] - b[criterion]);
  displayProducts(sorted);
}

displayProducts(productList);
