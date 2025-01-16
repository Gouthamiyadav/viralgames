import React, { useState } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Form from "./Components/Form/Form";
import MonthlyPlan from "./Components/Monthly/MonthlyPlan";
import AddOns from "./Components/AddOns/AddOns";
import Summary from "./Components/Summary/Summary";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="app">
      <div className="content">
        <Sidebar currentStep={currentStep} />
        <div className="form-area">
          {currentStep === 1 && <Form nextStep={nextStep} />}
          {currentStep === 2 && (
            <MonthlyPlan nextStep={nextStep} prevStep={prevStep} />
          )}
          {currentStep === 3 && (
            <AddOns nextStep={nextStep} prevStep={prevStep} />
          )}
          {currentStep === 4 && <Summary prevStep={prevStep} />}
        </div>
      </div>
    </div>
  );
}
export default App;
