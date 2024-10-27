interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

type TodoUpdatable = Pick<Todo, "title" | "description">;

const newTodo: Todo = {
  id: 123,
  title: "Task 1",
  description: "Clean bedroom",
  completed: false,
};

const updateTodo = (todo: TodoUpdatable): void => {
  newTodo.title = todo.title;

  newTodo.description = todo.description;

  console.log(`Todo title and description updated!`);

  if (todo.title === newTodo.title && todo.title === newTodo.description) {
    console.log(`Nothing Changes`);
  } else if (todo.title || todo.description) {
    console.log("todo Updated!");
  }
};

updateTodo({ title: "Task 1", description: "clean kitchen" });
