import React, { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";

const TodoForm = () => {
  const { dispatch } = useContext(TodoContext);
  const [item, setItem] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      todo: {
        item,
        dueDate,
      },
    });
    setItem("");
    setDueDate("");
  };

  return (
    <>
      <div class="bottomSection">
        <form onSubmit={handleSubmit}>
          <div class="bottomHeader">
            <h4>Add New ToDo</h4>
            <p>
              <i class="far fa-calendar-check"></i>
            </p>
          </div>
          <div class="bottomContent">
            <label htmlFor="newTodo">Add New ToDo:</label>
            <input
              type="text"
              placeholder="todo..."
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />

            <label htmlFor="completeBy">Due Date:</label>
            <input
              type="date"
              id="completeBy"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            ></input>
            <input class="submit" type="submit" value="add todo" />
          </div>
        </form>
        <button
          className="clear-btn"
          onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}
        >
          <i class="fas fa-arrow-down"></i> Clear Completed
          <i class="fas fa-arrow-down"></i>
        </button>
      </div>
    </>
  );
};

export default TodoForm;
