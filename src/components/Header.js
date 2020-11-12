import React from "react";
import Logo from "../images/Vinted_logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div>
          <img src={Logo} alt="Logo Vinted" />
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
          <button>S'inscrire</button>
          <button>Se connecter</button>
          <button>Vends tes articles</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
