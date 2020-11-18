import React, { useEffect, useState } from "react";
import axios from "axios";
import Offer from "../components/Offer";
import { useParams } from "react-router-dom";

const Offers = ({
  token,
  setUserToken,
  signInModal,
  setsignInModal,
  logInModal,
  setLogInModal,
}) => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
    );

    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Offer
        data={data}
        isLoading={isLoading}
        id={id}
        token={token}
        setUserToken={setUserToken}
        setsignInModal={setsignInModal}
        signInModal={signInModal}
        logInModal={logInModal}
        setLogInModal={setLogInModal}
      />
    </div>
  );
};

export default Offers;
