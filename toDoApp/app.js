window.setTimeout(function() {

    var todos = [];
    var input = prompt("What would you like to do?");

    while(input !== "quit") {
        //handle input
        if(input === "list") {
            listTodos();
        } else if(input === "new") {
            addTodos();
            console.log("Todo added.");
        } else if(input === "delete") {
            deleteTodos();
        }

        //ask again for new input
        input = prompt("What would you like to do?");
    }
    console.log("Successfully exited the app.")
    
    
    function listTodos() {
        console.log("**********")
            todos.forEach(function(todo, i) {
                console.log(i + ": " + todo);
            });
            console.log("**********");
    };

    function addTodos() {
        //ask for new todo
        var newTodo = prompt("Enter new todo");
        //add to todo list array
        todos.push(newTodo);
    };

    function deleteTodos() {
        //ask for index of todo to be deleted
        var index = prompt("Enter index of todo to delete");
        //delete that todo
        //splice()
        todos.splice(index, 1);
        console.log("Todo deleted.");
    };
}, 500);