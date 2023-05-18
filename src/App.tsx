import { useEffect, useState } from "react";
import useTodos from "./hooks/useTodos";
import { Todo } from "./types";
import { get, ref } from "firebase/database";
import { fireDatabase } from "./firebase/instances";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const query = ref(fireDatabase, "todos");

    get(query).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();

        Object.values(data).forEach((value) => {
          const todo: Todo = value as Todo;
          setTodos((prev) => [...prev, todo]);
        });
      } else {
        console.log("No data available");
      }
    });
  }, []);

  if (!todos.length) {
    return <p>Loading...</p>;
  }

  return <div className="App"></div>;
}

export default App;
