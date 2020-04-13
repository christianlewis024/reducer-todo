import uuid from "uuid/v4";

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          item: action.todo.item,
          dueDate: action.todo.dueDate,
          completed: false,
          id: uuid(),
        },
      ];

    case "CLEAR_COMPLETED":
      return state.filter((todo) => !todo.completed);
    case "TOGGLE_COMPLETED":
      return state.map((todo) => {
        if (todo.id === action.id) {
          todo.completed = !todo.completed;
          return todo;
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};
