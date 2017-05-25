let checklist = {
  todos: [],


//   showChecklist: function() {
//     if(this.todos.length === 0) {
//         console.log("List is empty!");
//       } else {
// 	  console.log("Full checklist");
// 	  	for(var i = 0;i < this.todos.length;i++) {
// 	  	  if(this.todos[i].completed) {
// 	  	    console.log("(X)", this.todos[i].todo);
// 	  	} else {
// 	  	 console.log("( )", this.todos[i].todo);
//         }
//      }
//   }
// },

  addToChecklist: function(todo) {
    if(todo) {
      this.todos.push({
    	  todo: todo, 
    	  completed: false,
      });
    }
  },

  deleteChecklistTodoNumber: function(num) {
  	this.todos.splice(num,1);
  },

  changeChecklistTodo: function(num, text) {
  	this.todos[num].todo = text;
  },

  todoCompleted: function(num) {
  	this.todos[num].completed = true;
  },

  toggleAll: function() {
  	let trueCount = 0;

  	 for(var i = 0 ; i < this.todos.length; i++) {
       if(this.todos[i].completed) {
      	trueCount += 1;
       }
  	 }
  	 if(trueCount === this.todos.length) {
  	 	for(var j = 0; j < this.todos.length;j++) {
  	 		this.todos[j].completed = false;
  	 	}
  	 } else {
  	 	for(var j = 0;j < this.todos.length;j++){
  	 		this.todos[j].completed = true;
        }
  	 }

  	}, //end of toggleCompleted



}; //end of checklist object



//BUTTONS


let handlers = {
  deleteTodo: function() {
  	checklist.deleteChecklistTodoNumber(num);
    view.displayTodos();
  },

  toggleTodos: function() {
  	checklist.toggleAll();
    view.displayTodos();
  },

  addTodo: function() {
  	var addTodoTextInput = document.getElementById('addTodoTextInput');
  	checklist.addToChecklist(addTodoTextInput.value);

  	addTodoTextInput.value = "";
    view.displayTodos();
  },

  changeTodo: function() {
  	var changeTodoNumber = document.getElementById("changeNumber");
  	var changeTodoText = document.getElementById("changeText");
  	
  	//input the values into the checklist method
  	checklist.changeChecklistTodo(changeTodoNumber.valueAsNumber,changeTodoText.value)
  	
  	//reset the input field to blank
    changeTodoNumber.value = "";
    changeTodoText.value = "";
    view.displayTodos();
  },

  removeTodo: function() {
  	var removeTodo = document.getElementById("removeNumber");  	
  	checklist.deleteChecklistTodoNumber(removeTodo.valueAsNumber);
    view.displayTodos();
  },
 



} //end of handlers obj


let view = {
  displayTodos: function() {

    let todosUl = document.querySelector("ul");
    todosUl.innerHTML = "";

      for(var i = 0;i < checklist.todos.length ;i++) {
        let todoLi = document.createElement("li");
        todoLi.textContent = checklist.todos[i].todo + ":  " +checklist.todos[i].completed;
        todoLi.appendChild(this.createDeleteButton());
        todosUl.appendChild(todoLi);
      }

  },
  createDeleteButton: function() {
      var deleteButton = document.createElement("button");
      deleteButton.textContent = "delete";
      deleteButton.className = "deleteButton";
      return deleteButton;
    },



} //end of view






