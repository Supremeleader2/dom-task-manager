const input    = document.getElementById('task');
const addBtn   = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', createTask);

function createTask() {
  const taskText = input.value.trim();
  if (!taskText) return;
  const li = document.createElement('li');

  const label = document.createElement('span');
  label.textContent = taskText;
  label.addEventListener('click', toggleTask);

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.addEventListener('click', deleteTask);

  li.appendChild(label);
  li.appendChild(removeBtn);
  taskList.appendChild(li);

  input.value = '';   
  input.focus();

}

function toggleTask(e) {
  const li = e.target.closest('li');
  li.classList.toggle('completed');
}

function deleteTask(e) {
  const li = e.target.closest('li');
  taskList.removeChild(li);
}