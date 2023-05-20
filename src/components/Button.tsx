interface ButtonProps {
  id?: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
  isDisabled?: boolean;
  className?: string;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      id={props.id}
      className={`w-full font-medium bg-slate-800 text-gray-50 py-4 hover:bg-slate-700 transition duration-300 ${props.className}`}
      onClick={props.onClick}
      type={props.type ?? "button"}
      disabled={props.isLoading || props.isDisabled}
    >
      {props.isLoading ? "Loading..." : props.children}
    </button>
  );
}
