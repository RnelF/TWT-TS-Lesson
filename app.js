"use strict";
const newTodo = {
    title: "Wake up!",
    description: "You are dreaming",
};
const updateTodo = (todo) => {
    if (todo.description) {
        newTodo.description = todo.description;
    }
    else if (todo.title) {
        newTodo.title = todo.title;
    }
};
updateTodo({ title: "Good Morning!" });
console.log(newTodo);
