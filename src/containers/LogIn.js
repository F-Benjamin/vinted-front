import React from "react";
// import axios from "axios";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <>
      <div className="signin-container">
        <h2>Se connecter</h2>
        <form className="signin-form">
          <input type="text" placeholder="Adresse email" />
          <input type="password" placeholder="Mot de passe" />

          <button type="submit">Se connecter</button>
        </form>
        <Link className="form-link" to="/signin">
          Pas encore de compte ? Inscris-toi !
        </Link>
      </div>
    </>
  );
};

export default LogIn;
