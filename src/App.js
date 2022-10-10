import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container, makeStyles } from "@material-ui/core";

import Todos from "./components/todos/Todos";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import NavBar from "./components/navBar/NavBar";
import { loadUser } from "./store/actions/authActions";

import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles({
  contentStyle: {
    margin: "30px auto",
  },
});

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])

  return (
    <>
      {/* Ce mécanisme de routage est propre à react-router-dom v6 */}
      <BrowserRouter>
        <ToastContainer/>  
        <Container maxWidth="md">
          <NavBar />
          <Container className={classes.contentStyle} maxWidth="sm">
            <Routes>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/" exact element={<Todos />} />
            </Routes>
          </Container>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
