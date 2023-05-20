import { Todo } from "../types";
import { CheckIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";
import TodoActionButton from "./TodoActionButton";
import { fireDatabase } from "../firebase/instances";
import { ref, remove, update } from "firebase/database";

interface TodoCardProps {
  todo: Todo;
}

export default function TodoCard({ todo }: TodoCardProps) {
  const handleDelete = async () => {
    const query = ref(fireDatabase, `todos/${todo.key}`);
    await remove(query);
  };

  const handleComplete = async () => {
    const query = ref(fireDatabase, `todos/${todo.key}`);

    await update(query, {
      isCompleted: !todo.isCompleted,
    });
  };

  return (
    <div className="border border-gray-400 rounded-md max-w-xs p-6 col-span-1 hover:border-sky-700 grid grid-rows-1 gap-y-8 transition-colors duration-300">
      <div>
        <h6
          className={`text-lg text-sky-500 font-medium ${
            todo.isCompleted ? "line-through !text-gray-600" : ""
          }`}
        >
          {todo.title}
        </h6>
        <p
          className={`text-base text-gray-300 mt-1 ${
            todo.isCompleted ? "line-through !text-gray-600" : ""
          }`}
        >
          {todo.description}
        </p>
      </div>

      <div className="w-full inline-flex flex-row-reverse gap-x-4">
        <TodoActionButton onClick={handleDelete}>
          <XMarkIcon className="h-6 w-6 text-red-600" />
        </TodoActionButton>

        <TodoActionButton onClick={handleComplete}>
          <CheckIcon
            className={`h-6 w-6 ${
              todo.isCompleted ? "text-yellow-500" : "text-emerald-600 "
            }`}
          />
        </TodoActionButton>
      </div>
    </div>
  );
}
