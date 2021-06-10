import React from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import { Switch, Route, Redirect } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Services from "./Services";
import Contact from "./Contact";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

const App = () => {
  return (
    <>
      <Header />
      
        <Switch>
          <Route exact path="/" component={Home} ></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/services" component={Services}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Redirect to="/" />
        </Switch>
      
      <Footer />
    </>
  );
};

export default App;
