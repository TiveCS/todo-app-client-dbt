import { get, ref } from "firebase/database";
import { fireDatabase } from "../firebase/instances";
import { Todo } from "../types";
import { useEffect, useState } from "react";

export default async function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const query = ref(fireDatabase, "todos");

    setLoading(true);
    get(query)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();

          Object.values(data).forEach((value) => {
            const todo: Todo = value as Todo;
            setTodos((prev) => [...prev, todo]);
          });
        } else {
          console.log("No data available");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { todos, loading };
}
