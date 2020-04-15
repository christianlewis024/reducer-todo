import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const TodoDetails = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);
  const dateDiff = new Date() - new Date(todo.dueDate);

  return (
    <li
      className={`todo ${todo.completed ? "completed" : ""} ${
        dateDiff > 0 ? "overdue" : ""
      }`}
      onClick={() => dispatch({ type: "TOGGLE_COMPLETED", id: todo.id })}
    >
      <p>{todo.item}</p>
      <p>Due Date: {todo.dueDate}</p>
    </li>
  );
};

export default TodoDetails;
