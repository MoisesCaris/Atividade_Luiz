let products = []

function addProduct() {
  const name = document.getElementById("productName").value.trim();
  const price = parseFloat(document.getElementById("productPrice").value);
  if (name && !isNaN(price)) {
    products.push({ name, price });
    renderProducts();
    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";
  }
}

function renderProducts() {
  const tbody = document.getElementById("productsTable")
  tbody.innerHTML = "";
  products.forEach((p, i) => {
    tbody.innerHTML += `<tr>
      <td>${p.name}</td>
      <td>R$ ${p.price.toFixed(2)}</td>
      <td>
        <button onclick="editProduct(${i})">Editar</button>
        <button onclick="deleteProduct(${i})">Excluir</button>
      </td>
    </tr>`;
  });
}

function editProduct(index) {
  const product = products[index];
  const newName = prompt("Novo nome do produto:", product.name);
  const newPrice = parseFloat(prompt("Novo preço:", product.price));
  if (newName && !isNaN(newPrice)) {
    products[index] = { name: newName, price: newPrice };
    renderProducts();
  }
}

function deleteProduct(index) {
  if (confirm("Tem certeza?")) {
    products.splice(index, 1);
    renderProducts();
  }
}

