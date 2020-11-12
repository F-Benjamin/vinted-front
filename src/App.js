import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./containers/Home";
import Offers from "./containers/Offers";
import LogIn from "./containers/LogIn";
import SignIn from "./containers/SignIn";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/offer/:id">
          <Offers />
        </Route>
        <Route path="/login">
          <LogIn />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
