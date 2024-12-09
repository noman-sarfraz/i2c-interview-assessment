import { EventType } from "@testing-library/react";
import React, { ChangeEvent, useEffect, useState } from "react";

const RegistrationForm = () => {
  // ===============
  // = LOCAL STATE =
  // ===============

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isRegistered, setIsRegistered] = useState<boolean>(false);

  // ================
  // = SIDE EFFECTS =
  // ================

  useEffect(() => {
    const formState = localStorage.getItem("formState");
    if (formState) {
      setName(JSON.parse(formState).name);
      setIsRegistered(true);
    }
  }, []);

  // ===================
  // = ACTION HANDLERS =
  // ===================

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleCompanyChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCompany(event.target.value);
  };

  const onSubmit = () => {
    // validate form inputs
    const errorMessages: Record<string, string> = {};
    if (!name.length) {
      errorMessages.name = "Name field is must";
    }
    if (!email.length) {
      errorMessages.email = "Email address field is must";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errorMessages.email = "Email address format is incorrect";
    }
    setErrors(errorMessages);
    console.log(
      errorMessages,
      email,
      name,
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    );
    if (Object.keys(errorMessages).length) {
      return;
    }

    // save form state to local storage
    const formState = {
      name,
      email,
      company,
    };
    localStorage.setItem("formState", JSON.stringify(formState));
    setIsRegistered(true);
  };

  // ==================
  // = RENDER METHODS =
  // ==================

  const renderErrorMessage = (field: string) => {
    if (!errors[field]) {
      return <></>;
    }

    return <p className="error-message">{errors[field]}</p>;
  };

  // ==========
  // = RETURN =
  // ==========

  if (isRegistered) {
    return (
      <div>
        <h2 className="registration-heading success">Registration</h2>
        <p className="success-message">
          Hi <span className="user-name">{name}</span>, thanks for registering.
          Somebody will contact you soon.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="registration-heading">Registration</h2>
      <p className="registration-details">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in
        tristique senectus dui pharetra sit.
      </p>

      <div className="text-input-fields">
        <div>
          <p className="input-label">
            Name <span className="red-asterisk">*</span>
          </p>
          <input
            type="text"
            className="text-input"
            placeholder="Enter your name"
            onChange={handleNameChange}
          />
          {renderErrorMessage("name")}
        </div>
        <div>
          <p className="input-label">Company</p>
          <input
            type="text"
            className="text-input"
            placeholder="Enter your company name"
            onChange={handleCompanyChange}
          />
        </div>
        <div>
          <p className="input-label">
            Email Address <span className="red-asterisk">*</span>
          </p>
          <input
            type="text"
            className="text-input"
            placeholder="Enter your email address"
            onChange={handleEmailChange}
          />
          {renderErrorMessage("email")}
        </div>
        <div>
          <button className="submit-button" onClick={onSubmit}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
