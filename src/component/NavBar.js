import React from "react";
import "./NavBar.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

function NavBar() {
  const history = useHistory();
  return (
    <div className="navBar">
      <AppBar position="static">
        <Toolbar>
          <Typography className="navBar_title" variant="h3">
            <div onClick={(e) => history.push("/")}>DEMO Streaming</div>
          </Typography>

          <Button className="navBar_button1" color="inherit">
            Log in
          </Button>
          <Button className="navBar_button2" color="inherit">
            start your free trial
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
