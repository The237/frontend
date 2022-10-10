import React from "react";
import { TextField, Button, makeStyles } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../../store/actions/todoActions";

const useStyles = makeStyles({
  formStyle: {
    margin: "0px auto",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 0px 12px -3px #000000",
    justifyContent: "text-between",
    display: "flex",
  },
  submitButton: {
    marginLeft: "12px",
  },
});

const AddTodos = ({ todo, setTodo }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo._id) {
      const id = todo._id
      const updatedTodo = {
        name: todo.name,
        isComplete: todo.isComplete,
        date: todo.date,
        author: todo.author,
        uid: todo.uid
      }
      dispatch(updateTodo(updatedTodo, id));
    } else {
      const newTodo = {
        ...todo,
         date: new Date()
      }
      dispatch(addTodo(newTodo));
    }

    setTodo({
      name: "",
      isComplete: false,
    });
  };

  return (
    <>
      <form
        className={classes.formStyle}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="enter-todo"
          variant="outlined"
          label="Enter ToDo"
          autoFocus
          fullWidth
          value={todo.name}
          onChange={(e) =>
            setTodo({ ...todo, name: e.target.value })
          }
        />
        <Button
          color="primary"
          variant="contained"
          type="submit"
          className={classes.submitButton}
        >
          <Send />
        </Button>
      </form>
    </>
  );
};

export default AddTodos;
