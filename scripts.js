var addTask = () => {
  var task = document.getElementById('taskToAdd').value
  var tasks = document.getElementById('tasks')
  var newTask = document.createElement('p')
  newTask.innerHTML = task
  document.body.appendChild(newTask, tasks)
}
const submit = document.getElementById('addTask')
submit.addEventListener('click', addTask)
