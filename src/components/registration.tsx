import RegistrationSvg from "../resources/images/registration.svg";
import RegistrationForm from "./registrationForm";

const Registration = () => {
  // ==========
  // = RETURN =
  // ==========

  return (
    <div className="registration-section mb-100">
      <div className="registeration-icon">
        <RegistrationSvg />
      </div>
      <div className="form-container">
        <div className="registration-form">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
};

export default Registration;
