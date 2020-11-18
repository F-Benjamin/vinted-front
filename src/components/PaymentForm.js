import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { useHistory } from "react-router-dom";

const PaymentForm = ({ title, amount, username }) => {
  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();
  const [completed, setCompleted] = useState(false);
  const total = amount + 6;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const cardElement = elements.getElement(CardElement);

      const stripeResponse = await stripe.createToken(cardElement, {
        name: `${username}`,
        currency: "eur",
      });
      console.log(stripeResponse);

      const stripeToken = stripeResponse.token.id;
      console.log(stripeToken);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        { token: stripeToken, title: `${title}`, amount: `${total}` }
      );

      if (response.data.status === "succeeded") {
        setCompleted(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="payment-container">
        <div>
          <form onSubmit={handleSubmit} className="payment-form">
            <div className="payment-summary">
              <div className="summary-title">
                Résumer de votre commande <strong>{username}</strong>
              </div>
              <div className="payment-content">
                <ul>
                  <li>
                    Votre commande <span>{amount}</span>
                  </li>
                  <li>
                    Frais protection acheteurs <span>1 €</span>
                  </li>
                  <li>
                    Frais de port <span>5 €</span>
                  </li>
                </ul>
              </div>
              <div className="divider"></div>
              <div className="payment-content">
                <ul>
                  <li>
                    <strong>Total</strong>
                    <span>
                      <strong>{Number(total.toFixed(2))}</strong>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="payment-card">
              <div className="payment-content">
                <div className="payment-text">
                  Il ne vous reste plus qu'un étape pour vous offrir{" "}
                  <strong>{title}</strong>. Vous allez payer{" "}
                  <strong>{Number(total.toFixed(2))} €</strong> (frais de
                  protection et frais de port inclus).
                  <div className="divider"></div>
                  <div>
                    {!completed ? (
                      <div>
                        <div className="payment-stripe">
                          <CardElement />
                        </div>
                        <button type="submit" className="stripe-button">
                          Pay
                        </button>
                      </div>
                    ) : (
                      <button
                        className="stripe-button"
                        onClick={() => {
                          history.push("/");
                        }}
                      >
                        Paiement effectué
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PaymentForm;
