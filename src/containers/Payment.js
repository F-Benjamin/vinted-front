import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "../components/PaymentForm";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");

const Payment = () => {
  const location = useLocation();
  const { title, amount, username } = location.state;

  return (
    <Elements stripe={stripePromise}>
      <PaymentForm title={title} amount={amount} username={username} />
    </Elements>
  );
};

export default Payment;
