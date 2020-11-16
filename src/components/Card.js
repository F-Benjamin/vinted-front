import React from "react";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";

const Card = ({ data, isLoading }) => {
  return isLoading ? (
    <Loader
      type="Puff"
      color="#00BFFF"
      height={80}
      width={80}
      className="loader"
    />
  ) : (
    <>
      {data.offers.map((product, index) => {
        // console.log(product.owner.account.avatar);
        return (
          <>
            <div key={index}>
              <div className="card-container">
                <Link className="link" to={`/offer/${product._id}`}>
                  <div className="card-avatar">
                    <div>
                      {product.owner.account.avatar ? (
                        <img
                          className="avatar"
                          src={product.owner.account.avatar}
                          alt={product.owner.account.username}
                        />
                      ) : (
                        <i class="fas fa-user-circle"></i>
                      )}
                      <span>{product.owner.account.username}</span>
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
            </div>
          </>
        );
      })}
    </>
  );
};

export default Card;
