import React, { useState, useEffect } from "react";
import axios from "axios";

import Ready from "../components/Ready";
import Cards from "../components/Cards";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "https://lereacteur-vinted-api.herokuapp.com/offers"
    );

    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Ready />
      <Cards data={data} isLoading={isLoading} />
    </div>
  );
};

export default Home;
