interface ButtonProps {
  id?: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      id={props.id}
      className="w-full font-medium bg-sky-600 text-gray-50 py-4 hover:bg-sky-700 "
      onClick={props.onClick}
      type={props.type ?? "button"}
    >
      {props.isLoading ? "Loading..." : props.children}
    </button>
  );
}
