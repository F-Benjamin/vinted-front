import React, { useState, useEffect } from "react";
import axios from "axios";

import Ready from "../components/Ready";
import Cards from "../components/Cards";
import SignIn from "../containers/SignIn";
import LogIn from "../containers/LogIn";

const Home = ({
  token,
  signInModal,
  setsignInModal,
  logInModal,
  setLogInModal,
  setUserToken,
}) => {
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
    <>
      <div className={signInModal ? "modal-show" : "modal-hidden"}>
        <SignIn
          setsignInModal={setsignInModal}
          setUserToken={setUserToken}
          setLogInModal={setLogInModal}
        />
      </div>
      <div className={signInModal ? "modal-show" : "modal-hidden"}>
        <SignIn
          setsignInModal={setsignInModal}
          setUserToken={setUserToken}
          setLogInModal={setLogInModal}
        />
      </div>
      <div className={logInModal ? "modal-show" : "modal-hidden"}>
        <LogIn
          setLogInModal={setLogInModal}
          setUserToken={setUserToken}
          setsignInModal={setsignInModal}
        />
      </div>
      <div className={logInModal ? "modal-show" : "modal-hidden"}>
        <LogIn
          setLogInModal={setLogInModal}
          setUserToken={setUserToken}
          setsignInModal={setsignInModal}
        />
      </div>
      <div className="home-home">
        <Ready token={token} setLogInModal={setLogInModal} />
        <Cards data={data} isLoading={isLoading} />
      </div>
    </>
  );
};

export default Home;
