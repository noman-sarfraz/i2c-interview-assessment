import React from "react";
import { infoCardsData } from "../data/infoCardsData";

const InfoCards = () => {
  // ==========
  // = RETURN =
  // ==========

  return (
    <div className="info-cards-container mb-100">
      {infoCardsData.map(({ id, title, descriptionText, imageSrc }) => (
        <div className="info-card" key={id}>
          <div className="d-flex align-items-center">
            <img className="info-image" src={imageSrc} />
          </div>
          <div>
            <div className="info-title">{title}</div>
            <div className="info-description">{descriptionText}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoCards;
