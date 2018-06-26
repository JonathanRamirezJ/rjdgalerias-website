// Third-party dependencies
import React from "react";
import { Router, Route } from "react-router";

// Own actions/constants/components
import App from "./app/containers/App";
import Login from "./app/containers/Login";
import Admin from "./app/containers/Admin";
import About from "./app/containers/About";
import Contact from "./app/containers/Contact";

// Project routes
export default (
  <Router>
    <Route path="/" exact strict component={App} />
    <Route path="quienes-somos" exact strict component={About} />
    <Route path="contacto" exact strict component={Contact} />
    <Route path="admin" exact strict component={Admin} />
    <Route path="login" exact strict component={Login} />
  </Router>
);
