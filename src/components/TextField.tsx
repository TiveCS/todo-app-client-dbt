import { useEffect, useState } from "react";

interface TextFieldProps {
  id?: string;
  placeholder: string;
  name: string;
  label?: string;
  limit?: number;
}

export default function TextField({
  id,
  placeholder,
  name,
  label,
  limit = 20,
}: TextFieldProps) {
  const [characters, setCharacters] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const length = value.length;

    if (length >= limit) {
      event.target.value = value.slice(0, limit);
    }

    if (length > limit) return;

    setCharacters(length);
  };

  useEffect(() => {
    const limiter = document.getElementById("limiter");

    if (limiter) {
      if (characters > limit) {
        limiter.classList.add("text-red-500");
      } else {
        limiter.classList.remove("text-red-500");
      }
    }
  }, [characters, limit]);

  return (
    <div className="w-full">
      <span className="flex flex-row gap-x-4">
        <label htmlFor={name} className="text-sky-500">
          {label}
        </label>

        <p id="limiter" className="text-gray-500">
          ({characters} / {limit})
        </p>
      </span>
      <input
        id={id}
        name={name}
        type="text"
        className="bg-transparent border-b border-gray-500 w-full px-4 py-6 focus:outline-none focus:border-sky-500"
        placeholder={placeholder}
        onChange={handleChange}
      ></input>
    </div>
  );
}
