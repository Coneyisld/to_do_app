let checklist = {
  todos: [],


//document.getElementById("showChecklist").innerHTML = "Hello World";


  showChecklist: function() {
    if(this.todos.length === 0) {
        console.log("List is empty!");
      } else {
	  console.log("Full checklist");
	  	for(var i = 0;i < this.todos.length;i++) {
	  	  if(this.todos[i].completed) {
	  	    console.log("(X)", this.todos[i].todo);
	  	} else {
	  	 console.log("( )", this.todos[i].todo);
        }
     }
  }
},

  addToChecklist: function(todo) {
    this.todos.push({
    	todo: todo, 
    	completed: false,
    });

    this.showChecklist();
  },

  deleteChecklistTodoNumber: function(num) {
  	this.todos.splice(num,1);
  	this.showChecklist();
  },

  changeChecklistTodo: function(num, text) {
  	this.todos[num].todo = text;
  	this.showChecklist();
  },

  todoCompleted: function(num) {
  	this.todos[num].completed = true;
  	this.showChecklist();
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

  	 this.showChecklist();

  	}, //end of toggleCompleted



}; //end of checklist object



//BUTTONS


let handlers = {
  showTodos: function() {
  	checklist.showChecklist();
  },

  deleteTodo: function() {
  	checklist.deleteChecklistTodoNumber(num);
  },

  toggleTodos: function() {
  	checklist.toggleAll();
  },

  addTodo: function() {
  	var addTodoTextInput = document.getElementById('addTodoTextInput');
  	checklist.addToChecklist(addTodoTextInput.value);

  	addTodoTextInput.value = "";
  },

  changeTodo: function() {
  	var changeTodoNumber = document.getElementById("changeNumber");
  	var changeTodoText = document.getElementById("changeText");
  	
  	//input the values into the checklist method
  	checklist.changeChecklistTodo(changeTodoNumber.valueAsNumber,changeTodoText.value)
  	
  	//reset the input field to blank
    changeTodoNumber.value = "";
    changeTodoText.value = "";
  },

  removeTodo: function() {
  	var removeTodo = document.getElementById("removeNumber");  	
  	checklist.deleteChecklistTodoNumber(removeTodo.valueAsNumber);
  },
 



} //end of handlers obj









