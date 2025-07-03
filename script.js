let users = [], products = [], tasks = [];

function addUser() {
  const name = document.getElementById("userName").value.trim();
  const email = document.getElementById("userEmail").value.trim();
  if (name && email) {
    users.push({ name, email });
    renderUsers();
    document.getElementById("userName").value = "";
    document.getElementById("userEmail").value = "";
  }
}

function renderUsers() {
  const tbody = document.getElementById("usersTable");
  tbody.innerHTML = "";
  users.forEach((u, i) => {
    tbody.innerHTML += `<tr>
      <td>${u.name}</td>
      <td>${u.email}</td>
      <td>
        <button onclick="editUser(${i})">Editar</button>
        <button onclick="deleteUser(${i})">Excluir</button>
      </td>
    </tr>`;
  });
}

function editUser(index) {
  const user = users[index];
  const newName = prompt("Novo nome:", user.name);
  const newEmail = prompt("Novo email:", user.email);
  if (newName && newEmail) {
    users[index] = { name: newName, email: newEmail };
    renderUsers();
  }
}

function deleteUser(index) {
  if (confirm("Tem certeza?")) {
    users.splice(index, 1);
    renderUsers();
  }
}

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
  const tbody = document.getElementById("productsTable");
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

function addTask() {
  const description = document.getElementById("taskDescription").value.trim();
  const status = document.getElementById("taskStatus").value;
  if (description) {
    tasks.push({ description, status });
    renderTasks();
    document.getElementById("taskDescription").value = "";
  }
}

function renderTasks() {
  const tbody = document.getElementById("tasksTable");
  tbody.innerHTML = "";
  tasks.forEach((t, i) => {
    tbody.innerHTML += `<tr>
      <td>${t.description}</td>
      <td>${t.status}</td>
      <td>
        <button onclick="editTask(${i})">Editar</button>
        <button onclick="deleteTask(${i})">Excluir</button>
      </td>
    </tr>`;
  });
}

function editTask(index) {
  const task = tasks[index];
  const newDesc = prompt("Nova descrição:", task.description);
  const newStatus = prompt("Novo status (Pendente ou Concluída):", task.status);
  if (newDesc && newStatus) {
    tasks[index] = { description: newDesc, status: newStatus };
    renderTasks();
  }
}

function deleteTask(index) {
  if (confirm("Tem certeza?")) {
    tasks.splice(index, 1);
    renderTasks();
  }
}