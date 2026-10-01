 taskList = document.querySelector(".taskList");
 addButton = document.querySelector("#addTaskBtn");
 tasksBtn = document.querySelector("#tasks");
 doneTasksBtn = document.querySelector('#donetasks');
 doneList =document.querySelector(".done");
 clickedElement = null;
 editBtn = document.querySelector(".edit")
 deleteBtn = document.querySelector(".delete")
addButton.onclick = function () {
    let input = document.querySelector(".in").value;
    let newTask = document.createElement('li');
    newTask.textContent = input;
    taskList.appendChild(newTask);
    let customMenu = document.querySelector(".menu");
    newTask.addEventListener("contextmenu" ,function(event){
      event.preventDefault();
      clickedElement = this;
      customMenu.style.display="block";
      customMenu.style.left = `${event .pageX}px`;
      customMenu.style.top = `${event .pageY}px`;
    });
    document.addEventListener("click",function(){
      customMenu.style.display="none";
    });
       
    document.querySelector(".in").value = "";
    let checkbox = document.createElement("input");
   checkbox.type = "checkbox";
   newTask.appendChild(checkbox);
   checkbox .onchange = function(){
    let taskItem = this.parentElement ;
    let doneList = document.querySelector(".done");
        if (this.checked){
            doneList.appendChild(taskItem);
    }else{
        taskList.appendChild(taskItem);
    }
};      
};
tasks.onclick =function(){
    if (taskList.style.display === "none" || taskList.style.display ===""){
        taskList.style.display = "block";
    }else {
        taskList.style.display = "none";
    
    }
    doneList.style.display ="none";
};

donetasks.onclick = function(){
 if (doneList.style.display ==="none" || doneList.style.display ===""){
     doneList.style.display = "block";
 } else{
    doneList.style.display ="none";
 }
  taskList.style.display = "none";
} ;
deleteBtn.addEventListener("click" ,function(){
    clickedElement.remove();
})
editBtn.addEventListener("click", function(){
    if (clickedElement){
    let currentText = clickedElement.firstChild.textContent;
    let newText =prompt("edit task",currentText);
    if (newText !==null && newText.trim() !==""){
        clickedElement.firstChild.textContent = newText;
    }  
    }
});