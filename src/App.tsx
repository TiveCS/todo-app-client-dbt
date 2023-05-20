import { onValue, push, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import AddButton from "./components/AddButton";
import AddTodoModal from "./components/AddTodoModal";
import TodoListContainer from "./components/TodoListContainer";
import { fireDatabase } from "./firebase/instances";
import useToggle from "./hooks/useToggle";
import { NewTodo, Todo } from "./types";

function App() {
  const [openModal, toggleOpenModal] = useToggle(false);
  const [loading, setLoading] = useState(false);
  const [todosLoading, setTodosLoading] = useState(true);
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const query = ref(fireDatabase, "todos");

    onValue(query, (snapshot) => {
      const todos: Todo[] = [];

      snapshot.forEach((childSnapshot) => {
        const val = childSnapshot.val();
        const key = childSnapshot.key as string;
        const todo: Todo = {
          key,
          title: val.title,
          description: val.description,
          isCompleted: val.isCompleted,
        };

        todos.push(todo);
      });

      setTodos(todos);
    });
    setTodosLoading(false);
  }, []);

  if (todosLoading) {
    return <p>Loading...</p>;
  }

  const addTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    // get the values from the form
    const title = form.title_field.value as string;
    const description = form.description_field.value as string;

    const newTodo: NewTodo = {
      title,
      description,
    };

    const query = ref(fireDatabase, "todos");

    setLoading(true);
    push(query, {
      ...newTodo,
      isCompleted: false,
    })
      .then(() => {
        setLoading(false);
        toggleOpenModal();
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <AddButton onClick={toggleOpenModal} />

      <AddTodoModal
        isOpen={openModal}
        isLoading={loading}
        onCloseModal={toggleOpenModal}
        onAddTodo={addTodo}
      />

      <TodoListContainer todos={todos} toggleModal={toggleOpenModal} />
    </>
  );
}

export default App;
