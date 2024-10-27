interface Todo {
  title: string;
  description: string;
}

const newTodo: Todo = {
  title: "Wake up!",
  description: "You are dreaming",
};

const updateTodo = (todo: Partial<Todo>): void => {
  if (todo.description) {
    newTodo.description = todo.description;
  } else if (todo.title) {
    newTodo.title = todo.title;
  }
};
updateTodo({ title: "Good Morning!" });

console.log(newTodo);
