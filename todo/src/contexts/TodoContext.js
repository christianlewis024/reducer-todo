import uuid from "uuid/v4";
import React, { createContext, useReducer, useEffect } from "react";
import { todoReducer } from "../reducers/todoReducer";

export const TodoContext = createContext();
const TodoContextProvider = (props) => {
  const [todos, dispatch] = useReducer(todoReducer, [], () => {
    const localData = localStorage.getItem("todos");
    return localData
      ? JSON.parse(localData)
      : [
          {
            item: "learn how make TODO lists",
            dueDate: "2020-12-13",
            completed: false,
            id: uuid(),
          },
          {
            item: "learn Redux",
            dueDate: "2020-04-23",
            completed: false,
            id: uuid(),
          },
          {
            item: "Master React",
            dueDate: "2021-07-13",
            completed: false,
            id: uuid(),
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
};
export default TodoContextProvider;
