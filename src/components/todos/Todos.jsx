import React, {useState} from "react";
import AddTodos from "./AddTodo";
import ListTodos from "./ListTodos";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


const Todos = () => {
  const auth = useSelector(state => state.auth)
  const [todo, setTodo] = useState({
    name:"",
    isComplete: false
  });

  if(!auth._id) return <Navigate replace to="/signin"/>;
  return (
    <>
      <AddTodos todo={todo} setTodo={setTodo}/>
      <ListTodos setTodo={setTodo}/>
    </>
  );
};

export default Todos;
