import React, { useState } from "react";
import "./Summary.css";
import Confirmation from "../Confirmation/Confirmation";

const Summary = ({ prevStep }) => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const confirmOrder = () => {
    setIsConfirmed(true);
  };

  return isConfirmed ? (
    <Confirmation />
  ) : (
    <div className="summary-container">
      <h2>Finishing up</h2>
      <p>Double-check everything looks OK before confirming.</p>

      <div className="summary-box">
        <div className="summary-plan">
          <div className="plan-details">
            <span className="plan-name">Arcade (Monthly)</span>
            <a href="#change" className="change-link">
              Change
            </a>
          </div>
          <span className="plan-price">$9/mo</span>
        </div>
        <hr />
        <div className="summary">
          <div className="summary-item">
            <span>Online service</span>
            <span>+$1/mo</span>
          </div>
          <div className="summary-item">
            <span>Larger storage</span>
            <span>+$2/mo</span>
          </div>
        </div>
      </div>
      <div className="total">
        <span>Total (per month)</span>
        <span className="total-price">+$12/mo</span>
      </div>

      <div className="buttons">
        <button className="back-button" onClick={prevStep}>
          Go Back
        </button>
        <button className="confirm-button" onClick={confirmOrder}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Summary;
