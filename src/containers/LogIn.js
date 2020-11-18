import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";

const LogIn = ({
  setUserToken,
  // setUserAvatar,
  // setAccountName,
  setLogInModal,
  setsignInModal,
}) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      "https://lereacteur-vinted-api.herokuapp.com/user/login",
      {
        email: email,
        password: password,
      }
    );
    // const avatar = response.data.account.avatar.url;
    // setUserAvatar(avatar);

    // const accountUsername = response.data.account.username;
    // setAccountName(accountUsername);
    // console.log(response.data.account.username);

    const newCookie = response.data.token;
    if (newCookie) {
      setUserToken(newCookie);
      // history.push("/");
      setLogInModal(false);
    } else {
      alert("Les informations ne sont pas correcte, veuillez ré-essayer");
    }
  };

  return (
    <>
      <div className="login-container">
        <h2>Se connecter</h2>
        <form className="signin-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit">Se connecter</button>
        </form>
        <Link
          className="form-link"
          onClick={() => {
            setLogInModal(false);
            setsignInModal(true);
          }}
        >
          Pas encore de compte ? Inscris-toi !
        </Link>
        <button
          className="login-button"
          onClick={() => {
            setLogInModal(false);
          }}
        >
          Retour
        </button>
      </div>
    </>
  );
};

export default LogIn;
