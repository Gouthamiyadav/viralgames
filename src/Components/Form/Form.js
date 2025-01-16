import React, { useState } from "react";
import "./Form.css";

const Form = ({ nextStep }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    num: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value.trim() === "" ? "This field is required" : "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "This field is required";
    if (!formData.email.trim()) {
      newErrors.email = "This field is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.num.trim()) {
      newErrors.num = "This field is required";
    } else if (!/^\+?\d{1,15}$/.test(formData.num)) {
      newErrors.num = "Please enter a valid phone number";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      nextStep();
    }
  };

  const formFields = [
    { label: "Name", name: "name", placeholder: "e.g. Stephen King" },
    {
      label: "Email Address",
      name: "email",
      placeholder: "e.g. stephenking@lorem.com",
    },
    { label: "Phone Number", name: "num", placeholder: "e.g. +1 234 567 890" },
  ];

  return (
    <div className="form-container">
      <h2>Personal info</h2>
      <p className="para">
        Please provide your name, email address, and phone number.
      </p>
      <form onSubmit={handleSubmit}>
        {formFields.map((field) => (
          <div key={field.name} className="form-group">
            <label htmlFor={field.name}>{field.label}</label>
            <p
              className={`error-message ${errors[field.name] ? "visible" : ""}`}
            >
              {errors[field.name]}
            </p>
            <input
              type={field.name === "email" ? "email" : "text"}
              id={field.name}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name]}
              onChange={handleChange}
              className={errors[field.name] ? "input-error" : ""}
            />
          </div>
        ))}
        <div className="button">
          <button type="submit" className="next-step">
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
