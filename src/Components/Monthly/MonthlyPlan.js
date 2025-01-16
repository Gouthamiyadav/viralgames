import React, { useState } from "react";
import "./MonthlyPlan.css";
import arcadeIcon from "../../assests/images/icon-arcade.svg";
import advancedIcon from "../../assests/images/icon-advanced.svg";
import proIcon from "../../assests/images/icon-pro.svg";

const MonthlyPlan = ({ nextStep, prevStep }) => {
  const [isYearly, setIsYearly] = useState(false); // State to toggle billing type

  const plans = [
    {
      name: "Arcade",
      monthly: "$9/mo",
      yearly: "$90/yr",
      icon: arcadeIcon,
      free: "2 months free",
    },
    {
      name: "Advanced",
      monthly: "$12/mo",
      yearly: "$120/yr",
      icon: advancedIcon,
      free: "2 months free",
    },
    {
      name: "Pro",
      monthly: "$15/mo",
      yearly: "$150/yr",
      icon: proIcon,
      free: "2 months free",
    },
  ];

  return (
    <div className="mp-form-container">
      <div className="mp-plan-content">
        <h2 className="mp-title">Select your plan</h2>
        <p className="mp-description">
          You have the option of monthly or yearly billing.
        </p>
        <div className="mp-plans">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`mp-plan ${index === 0 ? "active" : ""}`}
            >
              <img src={plan.icon} alt={plan.name} className="image" />
              <span>{plan.name}</span>
              <p
                style={{
                  marginTop: "4px",
                  marginBottom: "8px",
                  color: "hsl(231, 11%, 63%)",
                }}
              >
                {isYearly ? plan.yearly : plan.monthly}
              </p>
              {isYearly ? (
                <p
                  style={{
                    fontSize: "14px",
                    color: "hsl(213, 96%, 18%)",
                  }}
                >
                  {plan.free}
                </p>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
        <div className="mp-billing-toggle">
          <span>Monthly</span>
          <div className="mp-toggle-switch">
            <input
              type="checkbox"
              id="billingToggle"
              checked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
            />
            <label htmlFor="billingToggle"></label>
          </div>
          <span>Yearly</span>
        </div>
        <div className="mp-buttons">
          <button className="mp-back-button" onClick={prevStep}>
            Go Back
          </button>
          <button className="mp-next-button" onClick={nextStep}>
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default MonthlyPlan;
