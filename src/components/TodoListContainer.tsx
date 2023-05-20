import { Todo } from "../types";
import TodoCard from "./TodoCard";

interface TodoListContainerProps {
  todos: Todo[];
  toggleModal: () => void;
}

export default function TodoListContainer({
  todos,
  toggleModal,
}: TodoListContainerProps) {
  if (todos.length === 0) {
    return (
      <div className="flex flex-col gap-y-8 mt-16 px-6">
        <h1 className="text-xl text-gray-400">No todos yet...</h1>

        <button
          className="w-fit hover:underline hover:text-sky-500"
          onClick={toggleModal}
        >
          Add a Todo
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-6">
      {todos.map((todo) => (
        <TodoCard key={todo.key} todo={todo} />
      ))}
    </div>
  );
}
