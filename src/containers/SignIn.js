import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Cookie from "js-cookie";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // console.log(username);
  const [token, setToken] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      "https://lereacteur-vinted-api.herokuapp.com/user/signup",
      {
        email: email,
        username: username,
        password: password,
      }
    );
    console.log(response.data);
    setToken(response.data.token);
    Cookie.set("token", token, { expires: 10 });
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
              // console.log(e.target.value);
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
        <Link className="form-link" to="/login">
          Tu as déjà un compte ? Connecte-toi !
        </Link>
      </div>
    </>
  );
};

export default SignIn;
