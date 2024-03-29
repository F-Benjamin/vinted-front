import React from "react";
import Logo from "../images/Vinted_logo.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Header = ({
  token,
  setUserToken,
  userAvatar,
  setsignInModal,
  setLogInModal,
}) => {
  const history = useHistory();
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
          {token ? (
            <>
              <button
                className="logout"
                onClick={() => {
                  setUserToken(null);
                  history.push("/");
                }}
              >
                Se déconnecter
              </button>

              <Link>
                {userAvatar ? (
                  <img src={userAvatar} alt="userAvatar" className="avatar" />
                ) : (
                  <i class="fas fa-user-circle"></i>
                )}
              </Link>
            </>
          ) : (
            <>
              <button>
                <Link
                  className="header-link"
                  onClick={() => {
                    setsignInModal(true);
                  }}
                >
                  S'inscrire
                </Link>
              </button>
              <button>
                <Link
                  className="header-link"
                  onClick={() => {
                    setLogInModal(true);
                  }}
                >
                  Se connecter
                </Link>
              </button>
            </>
          )}

          <button>
            {token ? (
              <Link className="sold-link" to="/publish">
                Vends tes articles
              </Link>
            ) : (
              <Link
                className="sold-link"
                onClick={() => {
                  setLogInModal(true);
                }}
              >
                Vends tes articles
              </Link>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
