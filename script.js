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
