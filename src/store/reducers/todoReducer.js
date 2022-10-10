import { toast } from "react-toastify";

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_TODOS":
      return action.todos.data;
    case "ADD_TODO":
      toast.success("A todo was added ...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return [action.todo.data, ...state];
    case "CHECK_TODO":
      toast.success("A todo status was changed ...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return state.map((todo) =>
        todo._id === action.todo.data._id ? action.todo.data : todo
      );
    case "DELETE_TODO":
      toast.success("A todo was deleted ...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return state.filter((todo) =>
        todo._id !== action.id 
      );
    case "UPDATE_TODO":
      toast.success("A todo was updated ...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return state.map((todo) =>
        todo._id === action.todo.data._id ? action.todo.data : todo
      );
    default:
      return state;
  }
};

export default todoReducer;
