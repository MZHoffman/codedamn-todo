var addTask = () => {
  var task = document.querySelector('.taskToAdd').value
  var tasks = document.querySelector('.tasks')
  var newTask = document.createElement('div')
  task =
    '<p>' +
    task +
    '</p><input type="checkbox" name="done"><a href="#" class="delete">Detete</a>'
  newTask.innerHTML = task
  tasks.appendChild(newTask)
}
var clickElement = (e) => {
  switch (e.target.className) {
    case 'addTask':
      addTask()
      break
    case 'delete':
      deleteTask()
      break
    case 'editTask':
      editTask()
      break
  }
}
var deleteTask = () => {
  console.log("i'll be deletin'")
}
var editTask = () => {
  console.log("i'll be editin'")
}
const main = document.querySelector('.main')
main.addEventListener('click', clickElement)
