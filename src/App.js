import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookie from "js-cookie";

import Home from "./containers/Home";
import Offers from "./containers/Offers";
import LogIn from "./containers/LogIn";
import SignIn from "./containers/SignIn";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [token, setToken] = useState(Cookie.get("token") || null);

  const setUserToken = (newToken) => {
    if (newToken) {
      Cookie.set("token", newToken, { expires: 1 });
      setToken(newToken);
    } else {
      Cookie.remove("token");
      setToken(null);
    }
  };

  return (
    <Router>
      <Header token={token} setUserToken={setUserToken} />
      <Switch>
        <Route path="/offer/:id">
          <Offers />
        </Route>
        <Route path="/login">
          <LogIn setUserToken={setUserToken} />
        </Route>
        <Route path="/signin">
          <SignIn setUserToken={setUserToken} />
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
