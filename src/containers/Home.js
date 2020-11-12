import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "../components/Header";
import Ready from "../components/Ready";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "https://lereacteur-vinted-api.herokuapp.com/offers"
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
      <Header />
      <Ready />
      <Cards data={data} isLoading={isLoading} />
      <Footer />
    </div>
  );
};

export default Home;
