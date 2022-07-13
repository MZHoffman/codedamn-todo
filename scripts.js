var addTask = () => {
  var task = document.getElementById('taskToAdd').value
  var tasks = document.getElementById('tasks')
  var newTask = document.createElement('p')
  task = task + '<input type="checkbox" name="done">'
  newTask.innerHTML = task
  console.log(newTask)

  document.body.appendChild(newTask, tasks)
}
const submit = document.getElementById('addTask')
submit.addEventListener('click', addTask)
