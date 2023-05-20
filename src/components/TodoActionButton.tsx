interface TodoActionButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export default function TodoActionButton(props: TodoActionButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className="hover:bg-slate-800 rounded-full p-1 transition duration-300"
    >
      {props.children}
    </button>
  );
}
