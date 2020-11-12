import React from "react";
import { Link } from "react-router-dom";
const Card = ({ data, isLoading }) => {
  return isLoading ? (
    <span>Loading...</span>
  ) : (
    <>
      {data.offers.map((product, index) => {
        return (
          <>
            <div className="card-container">
              <Link className="link" to={`/offer/${product._id}`}>
                <div className="card-avatar">
                  <div key={index}>
                    <img
                      className="avatar"
                      src={product.owner.account.avatar.url}
                      alt={product.owner.account.username}
                    />
                    <span key={index}>{product.owner.account.username}</span>
                  </div>
                </div>

                <div className="card-product">
                  <img
                    src={product.product_image.url}
                    alt={product.product_name}
                  />
                  <div className="card-price-size-brand">
                    <span>{product.product_price} €</span>
                    {product.product_details.map((details) => {
                      return (
                        <>
                          <span>{details.TAILLE}</span>
                          <span>{details.MARQUE}</span>
                        </>
                      );
                    })}
                  </div>
                </div>
              </Link>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Card;
