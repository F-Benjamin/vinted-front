import React, { useEffect, useState } from "react";
import axios from "axios";
import Offer from "../components/Offer";
import { useParams } from "react-router-dom";

const Offers = () => {
  const { id } = useParams();
  // console.log(id);
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
    );
    // console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Offer data={data} isLoading={isLoading} id={id} />
    </div>
  );
};

export default Offers;
