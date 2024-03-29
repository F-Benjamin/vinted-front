import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";

const SignIn = ({ setUserToken, setsignInModal, setLogInModal }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      "https://vinted-backend-api.herokuapp.com/user/signup",
      {
        email: email,
        username: username,
        password: password,
      }
    );

    const newCookie = response.data.token;
    if (newCookie) {
      setUserToken(newCookie);
      setsignInModal(false);
      setUsername("");
      setEmail("");
      setPassword("");
    } else {
      alert("Les informations ne sont pas correcte, veuillez ré-essayer");
    }
  };

  return (
    <>
      <div className="signin-container">
        <h2>S'inscrire</h2>

        <form className="signin-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
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
          <div className="checkbox-container">
            <div className="checkbox-container-2">
              <input type="checkbox" />
              <span>S'inscrire à notre newsletter</span>
            </div>
            <p>
              En m'inscrivant je confirme avoir lu et accepté les Termes &
              Conditions et Politique de Confidentialité de Vinted. Je confirme
              avoir au moins 18 ans.
            </p>
          </div>
          <button type="submit">S'inscrire</button>
        </form>
        <Link
          className="form-link"
          onClick={() => {
            setsignInModal(false);
            setLogInModal(true);
          }}
        >
          Tu as déjà un compte ? Connecte-toi !
        </Link>
        <button
          className="login-button"
          onClick={() => {
            setsignInModal(false);
            setUsername("");
            setEmail("");
            setPassword("");
          }}
        >
          Retour
        </button>
      </div>
    </>
  );
};

export default SignIn;
