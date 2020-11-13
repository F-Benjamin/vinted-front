import React from "react";

const Account = ({ accountName }) => {
  console.log(accountName);
  return (
    <>
      <div className="signin-container">
        <h2>Mon compte</h2>
        <div className="signin-form">
          {/* <div>name: {accountName}</div> */}
        </div>
      </div>
    </>
  );
};

export default Account;
