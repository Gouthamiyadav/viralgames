import React from "react";
import "./AddOns.css";

const AddOns = ({ nextStep, prevStep }) => {
  return (
    <div className="addOn-container ">
      <h2>Pick Add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>
      <div className="addons">
        <div className="addon-item">
          <input type="checkbox" id="onlineService" className="service" />
          <label htmlFor="onlineService">
            <span>Online service</span>
            <p>Access to multiplayer games</p>
          </label>
          <span className="price">+$1/mo</span>
        </div>
        <div className="addon-item">
          <input type="checkbox" id="largerStorage" className="service" />
          <label htmlFor="largerStorage">
            <span>Larger storage</span>
            <p>Extra 1TB of cloud save</p>
          </label>
          <span className="price">+$2/mo</span>
        </div>
        <div className="addon-item">
          <input type="checkbox" id="customProfile" className="service" />
          <label htmlFor="customProfile">
            <span>Customizable profile</span>
            <p>Custom theme on your profile</p>
          </label>
          <span className="price">+$2/mo</span>
        </div>
      </div>
      <div className="buttons">
        <button className="back-button" onClick={prevStep}>
          Go Back
        </button>
        <button className="next-button" onClick={nextStep}>
          Next Step
        </button>
      </div>
    </div>
  );
};

export default AddOns;
