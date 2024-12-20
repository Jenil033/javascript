function remove(todoList) {
    todoList.shift();
    return todoList;
}

let todoList = ["Buy groceries", "Clean room", "Study"];
console.log("Updated" + remove(todoList));
