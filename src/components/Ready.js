import React from "react";
import { Link } from "react-router-dom";
import ReadyForm from "../images/forme.svg";

const Ready = () => {
  return (
    <div className="home">
      <div>
        <img src={ReadyForm} alt="forme" className="readyform" />
        <div className="home-ready">
          Prêts à faire du tri dans vos placards ?
          <button>
            <Link className="sold-link" to="/workinprogress">
              Commencer à vendre
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ready;
