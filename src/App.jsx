import React from "react";
import { Switch } from "react-router-dom";
import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Services";
import Nav from "./Navbar";

function App() {
  return (
    <>
    <Nav />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/service" component={Service} />
      <Redirect to="/" />
    </Switch>
    </>
  );
}

export default App;
