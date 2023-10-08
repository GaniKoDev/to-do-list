
/* const inputBoxDom = document.querySelector("input-box")

const taskContainerDom = document.querySelector("taskContainer") 

document.getElementById("myBtn").addEventListener("submit", addTask)


function addTask() {

    
   
    let liDom = document.createElement("li");
    var inputBoxDom = document.getElementById("input-box")
    liDom.appendChild(inputBoxDom)

    
   
    document.getElementById("taskContainer").appendChild(liDom); 

    
   
  } */


  let taskFormDom = document.querySelector('#taskForm')

  taskFormDom.addEventListener('submit',formSubmit)

  function formSubmit(event){
    
    event.preventDefault()
    console.log("islem gerceklesti")
    let taskDom = document.querySelector('#task')
    console.log(taskDom.value)
    localStorage.setItem('task',taskDom.value)
    addContainer(taskDom.value)
  }
  
  let taskContainerDom = document.querySelector('#taskContainer')

  function addContainer(task){

    let liDom = document.createElement('li')
    liDom.innerHTML = `${task}`
    taskContainerDom.append(liDom)

  }
 