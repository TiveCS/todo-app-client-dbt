import { XMarkIcon } from "@heroicons/react/24/outline";

interface CloseModalButtonProps {
  onClick: () => void;
}

export default function CloseModalButton(props: CloseModalButtonProps) {
  return (
    <button
      id="close-modal-btn"
      className="absolute right-4 top-4 md:right-16 md:top-8 hover:bg-slate-700 px-4 py-4 rounded-full"
      onClick={props.onClick}
    >
      <XMarkIcon className="h-6 w-6 text-gray-50" />
    </button>
  );
}
