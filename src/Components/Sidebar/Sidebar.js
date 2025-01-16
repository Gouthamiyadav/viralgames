import React from "react";
import "./Sidebar.css";

const Sidebar = ({ currentStep }) => {
  return (
    <div className="sidebar">
      <ul>
        <li className={currentStep === 1 ? "step active" : ""}>
          <div className="step-container">
            <div className="step-number">1</div>
            <div className="info">
              <span>Step 1</span>
              <h3>YOUR INFO</h3>
            </div>
          </div>
        </li>
        <li className={currentStep === 2 ? "step active" : ""}>
          <div className="step-container">
            <div className="step-number">2</div>
            <div className="info">
              <span>Step 2</span>
              <h3>SELECT PLAN</h3>
            </div>
          </div>
        </li>
        <li className={currentStep === 3 ? "step active" : ""}>
          <div className="step-container">
            <div className="step-number">3</div>
            <div className="info">
              <span>Step 3</span>
              <h3>ADD-ONS</h3>
            </div>
          </div>
        </li>
        <li className={currentStep === 4 ? "step active" : ""}>
          <div className="step-container">
            <div className="step-number">4</div>
            <div className="info">
              <span>Step 4</span>
              <h3>SUMMARY</h3>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
