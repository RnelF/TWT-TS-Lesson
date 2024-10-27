interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Omit<Todo, "id">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  description: "clean all bed sheets!",
};
