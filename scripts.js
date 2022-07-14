var addTask = () => {
  var task = document.querySelector('.taskToAdd').value
  var tasks = document.querySelector('.tasks')
  var newTask = document.createElement('div')
  task =
    '<input disabled type="text" name="editTaskField" class="editTaskField" value="' +
    task +
    '"><button class="checkTask"><i class="fa-solid fa-check"></i></button>' +
    '<button class="editTask"><i class="fa-solid fa-pen-to-square"></i></button>' +
    '<button class="TaskFieldSave" value="saveEdit" hidden><i class="fa-solid fa-floppy-disk"></i></button>' +
    '<button class="delete"><i class="fa-solid fa-trash-can"></i></button>'
  newTask.innerHTML = task
  tasks.appendChild(newTask)
}
var clickElement = (e) => {
  var classTask = e.target.className
  var target = e.target
  switch (classTask) {
    case 'addTask':
      e.preventDefault()
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
    case 'checkTask':
      checkTask(target)
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
var checkTask = (target) => {
  console.log(target.parentElement.querySelector('.editTaskField'))
  target.parentElement
    .querySelector('.editTaskField')
    .classList.toggle('checked')
}
const main = document.querySelector('.main')
main.addEventListener('click', clickElement)
