import { PlusIcon } from "@heroicons/react/24/outline";

interface AddButtonProps {
  onClick: () => void;
}

export default function AddButton(props: AddButtonProps) {
  return (
    <button
      id="add-button"
      className="fixed bottom-8 right-4 md:bottom-16 md:right-12 bg-sky-600 hover:bg-sky-700 p-4 lg:p-6 rounded-full"
      onClick={props.onClick}
    >
      <PlusIcon className="h-6 w-6 text-gray-50" />
    </button>
  );
}
