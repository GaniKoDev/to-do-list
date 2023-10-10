
/* const inputBoxDom = document.querySelector("input-box")

const taskContainerDom = document.querySelector("taskContainer") 

document.getElementById("myBtn").addEventListener("submit", addTask)


function addTask() {

    
   
    let liDom = document.createElement("li");
    var inputBoxDom = document.getElementById("input-box")
    liDom.appendChild(inputBoxDom)

    
   
    document.getElementById("taskContainer").appendChild(liDom); 

    
   
  } */


 /*  let taskFormDom = document.querySelector('#taskForm')

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

  } */
 

/*   let taskListDom = document.querySelector('#taskList')
  taskListDom.addEventListener('submit',addFunction)



function addFunction(event){

    event.preventDefault();
    console.log('it is ok')
    let itemDom = document.querySelector('#item')
    console.log(itemDom.value)
    localStorage.setItem('item',itemDom)
    addItem(itemDom.value)
    

}

let shoppingListDom = document.querySelector('#shoppingList')

function addItem(item){

    let liDom = document.createElement('li')
    liDom.innerHTML = `${item}`
    shoppingListDom.appendChild(liDom)



} */



    let formListDom = document.querySelector('#formList')
    formListDom.addEventListener('submit',addFunction)

    let alertDom = document.querySelector('#alert')

    const ALERT = (message) =>`<div class="alert alert-danger alert-dismissible fade show" role="alert">
    <strong>HEY :)</strong>${message}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`

    function addFunction(event){

        event.preventDefault();
/*         console.log('it is ok')
 */        let itemDom = document.querySelector('#item')

        if(item.value){

            addItem(itemDom.value)
            
           

        }  else {
            console.log('hatali giris')
            alertDom.innerHTML = ALERT('Pleaase enter your shopping task!')
        }

        

        console.log(itemDom.value)
        localStorage.setItem('item',itemDom.value)
        /* addItem(itemDom.value) */
        
        itemDom.value="" //reset inside input 


    }

    let shoppingListDom = document.querySelector('#shoppingList')

    function addItem(x){

        let liDom = document.createElement('li')
        liDom.innerHTML = `${x}`
        shoppingListDom.append(liDom)

    }


