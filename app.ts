interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Wake UP!",
  completed: false,
};
