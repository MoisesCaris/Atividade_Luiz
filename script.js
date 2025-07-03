let tasks = [];

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