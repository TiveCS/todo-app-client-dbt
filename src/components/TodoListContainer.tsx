import { Todo } from "../types";
import TodoCard from "./TodoCard";

interface TodoListContainerProps {
  todos: Todo[];
}

export default function TodoListContainer({ todos }: TodoListContainerProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-6">
      {todos.map((todo) => (
        <TodoCard key={todo.key} todo={todo} />
      ))}
    </div>
  );
}
