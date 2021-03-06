import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import Home from "./component/Home";
import Series from "./component/Series";
import Movies from "./component/Movies";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/Movies">
            <Movies />
          </Route>
          <Route path="/Series">
            <Series />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
