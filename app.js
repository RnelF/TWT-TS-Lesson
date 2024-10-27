"use strict";
const newTodo = {
    id: 123,
    title: "Task 1",
    description: "Clean bedroom",
    completed: false,
};
const updateTodo = (todo) => {
    newTodo.title = todo.title;
    newTodo.description = todo.description;
    console.log(`Todo title and description updated!`);
    if (todo.title === newTodo.title && todo.title === newTodo.description) {
        console.log(`Nothing Changes`);
    }
    else if (todo.title || todo.description) {
        console.log("todo Updated!");
    }
};
updateTodo({ title: "Task 1", description: "clean kitchen" });
