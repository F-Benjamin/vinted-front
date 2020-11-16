import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookie from "js-cookie";

import Home from "./containers/Home";
import Offers from "./containers/Offers";
import LogIn from "./containers/LogIn";
import SignIn from "./containers/SignIn";
import Header from "./components/Header";
import Account from "./containers/Account";
import Footer from "./components/Footer";
import Work from "./containers/Work";
import Publish from "./containers/Publish";

function App() {
  const [token, setToken] = useState(Cookie.get("token") || null);
  const [userAvatar, setUserAvatar] = useState("");
  const [accountName, setAccountName] = useState("");
  const [signInModal, setsignInModal] = useState(false);
  const [logInModal, setLogInModal] = useState(false);

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
      <Header
        token={token}
        setUserToken={setUserToken}
        userAvatar={userAvatar}
        setsignInModal={setsignInModal}
        setLogInModal={setLogInModal}
      />
      <Switch>
        <Route path="/offer/:id">
          <Offers token={token} />
        </Route>
        <Route path="/login">
          <LogIn
            setUserToken={setUserToken}
            setUserAvatar={setUserAvatar}
            setAccountName={setAccountName}
          />
        </Route>
        <Route path="/signin">
          <SignIn setUserToken={setUserToken} setUserAvatar={setUserAvatar} />
        </Route>
        <Route path="/account">
          <Account accountName={accountName} />
        </Route>
        <Route path="/publish">
          <Publish token={token} />
        </Route>
        <Route path="/workinprogress">
          <Work />
        </Route>
        <Route path="/">
          <Home
            token={token}
            setsignInModal={setsignInModal}
            signInModal={signInModal}
            logInModal={logInModal}
            setLogInModal={setLogInModal}
            setUserToken={setUserToken}
          />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
