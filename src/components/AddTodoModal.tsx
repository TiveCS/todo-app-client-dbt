import React from "react";
import CloseModalButton from "./CloseModalButton";
import TextField from "./TextField";
import Button from "./Button";

interface AddTodoModalProps {
  isOpen: boolean;
  isLoading?: boolean;

  onCloseModal: () => void;
  onAddTodo: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function AddTodoModal(props: AddTodoModalProps) {
  return (
    <div
      id="add-modal"
      className={`${
        !props.isOpen ? "-translate-y-full" : "translate-y-0"
      } fixed top-0 left-0 h-screen w-screen bg-slate-900 z-10 transition-transform duration-500 ease-in-out`}
    >
      <CloseModalButton onClick={props.onCloseModal} />

      <form
        className="h-screen w-screen px-8 lg:px-32 flex flex-col gap-y-16 items-center justify-center"
        onSubmit={props.onAddTodo}
      >
        <TextField
          name="title_field"
          placeholder="What are we going to do?"
          label="Title"
        />
        <TextField
          name="description_field"
          placeholder="Explain our activities..."
          label="Description"
          limit={60}
        />

        <Button id="add-todo-btn" type="submit" isLoading={props.isLoading}>
          Add Todo
        </Button>
      </form>
    </div>
  );
}
