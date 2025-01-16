import React from "react";
import "./Confirmation.css";
import thankYou from "../../assests/images/icon-thank-you.svg";

const Confirmation = () => {
  return (
    <div className="thank-you-container">
      <div className="thank-you-content">
        <div className="thank-you-icon">
          <img src={thankYou} alt="thankyou" />
        </div>
        <h1 style={{ fontSize: "40px", marginTop: "30px" }}>Thank you!</h1>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};

export default Confirmation;
