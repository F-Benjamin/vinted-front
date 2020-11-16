import React from "react";
import { Link } from "react-router-dom";
import ReadyForm from "../images/forme.svg";

const Ready = ({ token, setLogInModal }) => {
  return (
    <div className="home">
      <div>
        <img src={ReadyForm} alt="forme" className="readyform" />
        <div className="home-ready">
          Prêts à faire du tri dans vos placards ?
          <button>
            {token ? (
              <Link className="sold-link" to="/publish">
                Commencer à vendre
              </Link>
            ) : (
              <Link
                className="sold-link"
                onClick={() => {
                  setLogInModal(true);
                }}
              >
                Commencer à vendre
              </Link>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ready;
