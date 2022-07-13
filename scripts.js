var addTask = () => {
  var task = document.querySelector('.taskToAdd').value
  var tasks = document.querySelector('.tasks')
  var newTask = document.createElement('div')
  task =
    '<p>' +
    task +
    '</p><input type="checkbox" name="done" class="checkTask">' +
    '<a href="#" class="delete">Delete</a>' +
    '<a href="#" class="editTask">Edit</a>'
  newTask.innerHTML = task
  tasks.appendChild(newTask)
}
var clickElement = (e) => {
  var classTask = e.target.className
  var target = e.target
  switch (classTask) {
    case 'addTask':
      addTask()
      break
    case 'delete':
      deleteTask(target)
      break
    case 'editTask':
      editTask()
      break
  }
}
var deleteTask = (target) => {
  if (target.className == 'delete') {
    target.parentElement.remove()
  }
}
var editTask = () => {
  console.log("i'll be editin'")
}
const main = document.querySelector('.main')
main.addEventListener('click', clickElement)
