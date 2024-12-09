import React from "react";
import InvestmentSvg from "../resources/images/investment.svg";
import { customerFeedbacks } from "../data/customerFeedbacks";
import RadialLine_v1 from "../resources/images/radialLine_v1.svg";

const Feedbacks = () => {
  // ==========
  // = RETURN =
  // ==========

  return (
    <div className="feedbacks-section-container">
      <div className="feedbacks-section">
        <div>
          <h2 className="section-title">
            Lorem ipsum{" "}
            <span className="highlighted-text">
              <span>dolor</span>
              <RadialLine_v1 />
            </span>{" "}
            sit amet yo 👋
          </h2>
        </div>
        {customerFeedbacks
          .slice(0, 3)
          .map(({ id, customerName, feedback, imageSrc }) => (
            <div className="customer-feedback-card" key={id}>
              <div className="d-flex align-items-center">
                <img className="customer-image" src={imageSrc} />
              </div>
              <div>
                <div className="customer-name">{customerName}</div>
                <div className="customer-feedback">{feedback}</div>
              </div>
            </div>
          ))}
        <div className="blank-feedback-card"></div>
      </div>

      <div className="investment-icon">
        <InvestmentSvg />
      </div>
    </div>
  );
};

export default Feedbacks;
