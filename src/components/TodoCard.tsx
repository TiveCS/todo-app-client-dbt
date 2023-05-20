import { Todo } from "../types";

interface TodoCardProps {
  todo: Todo;
}

export default function TodoCard({ todo }: TodoCardProps) {
  return (
    <div className="border border-gray-400 rounded-md max-w-xs p-6 pb-16 col-span-1 hover:bg-slate-900 hover:border-sky-700">
      <h6 className="text-lg text-sky-500 font-medium">{todo.title}</h6>
      <p className="text-base text-gray-300">{todo.description}</p>
    </div>
  );
}
