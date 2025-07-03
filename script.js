let users = []

function addUser() {
  const name = document.getElementById("userName").value.trim();
  const email = document.getElementById("userEmail").value.trim();
  if (name && email) {
    users.push({ name, email })
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
