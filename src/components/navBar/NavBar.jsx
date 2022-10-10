import React from "react";
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  linkStyle: {
    color: "#fafafa",
    textDecoration: "none",
  },
});

const NavBar = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  const auth = useSelector((state) => state.auth);

  console.log(state);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
    navigate("/signin");
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.root}>
            <Link className={classes.linkStyle} to="/">
              toDOApp;
            </Link>
          </Typography>
          {auth._id ? (
            <>
              <Typography variant="subtitle2" className={classes.root}>
                logged in as {auth.name}
              </Typography>
              <Button onClick={() => handleSignOut()} color="inherit">
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit">
                <Link className={classes.linkStyle} to="/signin">
                  Sign In
                </Link>
              </Button>
              <Button color="inherit">
                {" "}
                <Link className={classes.linkStyle} to="/signup">
                  Sign Up
                </Link>
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
