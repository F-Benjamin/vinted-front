import React from "react";
import Logo from "../images/Vinted_logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div>
          <Link to={"/"}>
            <img src={Logo} alt="Logo Vinted" />
          </Link>
        </div>
        <div className="search">
          <i class="fas fa-search"></i>
          <input
            type="text"
            class="search-input"
            placeholder="Recherche des articles"
          />
        </div>
        <div className="header-button">
          <button className="header-link">
            <Link to={"/signin/"}>S'inscrire</Link>
          </button>
          <button className="header-link">
            <Link to="/login">Se connecter</Link>
          </button>

          <button>Vends tes articles</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
