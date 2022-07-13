var addTask = () => {
  var task = document.querySelector('.taskToAdd').value
  var tasks = document.querySelector('.tasks')
  var newTask = document.createElement('div')
  task =
    '<input disabled type="text" name="editTaskField" class="editTaskField" value="' +
    task +
    '"> ' +
    '<input type="checkbox" name="done" class="checkTask">' +
    '<button class="editTask">Edit</button>' +
    '<input type="button" value="saveEdit" class="TaskFieldSave" hidden>' +
    '<a href="#" class="delete">Delete</a>'
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
      editTask(target)
      break
    case 'TaskFieldSave':
      saveEdit(target)
      break
  }
}
var deleteTask = (target) => {
  if (target.className == 'delete') {
    target.parentElement.remove()
  }
}
var editTask = (target) => {
  console.log("i'll be editin'" + target.innerHTML)
  console.log(target.parentElement.querySelector('.editTaskField'))
  target.parentElement
    .querySelector('.editTaskField')
    .removeAttribute('disabled')
  target.parentElement.querySelector('.TaskFieldSave').removeAttribute('hidden')
  target.parentElement
    .querySelector('.editTask')
    .setAttribute('hidden', 'hidden')
}

var saveEdit = (target) => {
  target.parentElement
    .querySelector('.editTaskField')
    .setAttribute('disabled', 'disabled')
  target.parentElement
    .querySelector('.TaskFieldSave')
    .setAttribute('hidden', 'hidden')
  target.parentElement.querySelector('.editTask').removeAttribute('hidden')
}
const main = document.querySelector('.main')
main.addEventListener('click', clickElement)
