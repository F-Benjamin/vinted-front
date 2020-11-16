import React from "react";
import Loader from "react-loader-spinner";

const Offer = ({ data, isLoading }) => {
  return isLoading ? (
    <Loader
      type="Puff"
      color="#00BFFF"
      height={80}
      width={80}
      className="loader"
    />
  ) : (
    <div className="offer-body">
      <div className="offer-container">
        <div>
          <img
            className="offer-picture"
            src={data.product_image.url}
            alt={data.product_name}
          />
        </div>
        <div className="offer-infos">
          <span className="offer-price">{data.product_price} €</span>
          <ul className="offer-list">
            {data.product_details.map((details, index) => {
              const keys = Object.keys(details);
              return (
                <>
                  <li key={index}>
                    <span>{keys}</span>
                    <span>{details[keys[0]]}</span>
                  </li>
                </>
              );
            })}
          </ul>
          <div className="divider"></div>
          <div className="offer-content">
            <p className="name">{data.product_name}</p>
            <p className="description">{data.product_description}</p>
            <div className="offer-avatar-user">
              {data.owner.account.avatar.url ? (
                <img
                  src={data.owner.account.avatar.url}
                  alt={data.owner.account.username}
                />
              ) : (
                <i class="fas fa-user-circle"></i>
              )}

              <span>{data.owner.account.username}</span>
            </div>
          </div>
          <button>Acheter</button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
