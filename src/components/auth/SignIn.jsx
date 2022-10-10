import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, TextField, Button, makeStyles } from "@material-ui/core";
import { signIn } from "../../store/actions/authActions";
import { Navigate } from "react-router-dom";

const useStyles = makeStyles({
  formStyle: {
    margin: "0px auto",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 0px 12px -3px #000000",
  },
  spacing: {
    marginTop:"20px"
  }
});

const SignIn = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)
  console.log(auth)
  const [creds, setCreds] = useState({
    email: "",
    password: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(creds))
    setCreds({
      email: "",
      password:""
    })
  }

  if(auth._id) return <Navigate replace to="/"/>;

  return (
    <>
      <form noValidate autoComplete="off" className= {classes.formStyle} onSubmit = {handleSubmit}>
        <Typography variant="h5">Sign In;</Typography>
        <TextField
          id="enter-email"
          label="Enter Email"
          variant="outlined"
          fullWidth
          className= {classes.spacing}
          value = {creds.email}
          onChange = {(e) => setCreds({...creds, email : e.target.value})}
        />
        <TextField
          id="enter-password"
          type="password"
          label="Enter Password"
          variant="outlined"
          fullWidth
          className= {classes.spacing}
          value = {creds.password}
          onChange = {(e) => setCreds({...creds, password : e.target.value})}
        />
        <Button variant="contained" color="primary" type="submit" className= {classes.spacing}>
          Sign In
        </Button>
      </form>
    </>
  );
};

export default SignIn;
