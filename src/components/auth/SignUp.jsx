import React, { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { Typography, TextField, Button, makeStyles } from "@material-ui/core";
import { signUp } from "../../store/actions/authActions";
import { Navigate } from "react-router-dom";

const useStyles = makeStyles({
  formStyle: {
    margin: "0px auto",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 0px 12px -3px #000000",
  },
  spacing: {
    marginTop: "20px",
  },
});

const SignUp = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth)

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(signUp(user))
    setUser({
      name: "",
      email: "",
      password: "",
    });
  };

  if(auth._id) return <Navigate replace to="/"/>;

  return (
    <>
      <form
        noValidate
        autoComplete="off"
        className={classes.formStyle}
        onSubmit={handleSubmit}
      >
        <Typography variant="h5">Sign Up;</Typography>
        <TextField
          id="enter-name"
          label="Enter Name"
          variant="outlined"
          fullWidth
          className={classes.spacing}
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <TextField
          id="enter-email"
          label="Enter Email"
          variant="outlined"
          fullWidth
          className={classes.spacing}
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <TextField
          id="enter-password"
          type="password"
          label="Enter Password"
          variant="outlined"
          fullWidth
          className={classes.spacing}
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.spacing}
        >
          Sign Up
        </Button>
      </form>
    </>
  );
};

export default SignUp;
