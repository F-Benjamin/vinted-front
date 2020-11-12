import React from "react";
import Card from "./Card";

const Cards = ({ data, isLoading }) => {
  return (
    <>
      <div className="home-card">
        <Card data={data} isLoading={isLoading} />
      </div>
    </>
  );
};

export default Cards;
