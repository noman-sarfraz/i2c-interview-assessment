import React, { useEffect, useState } from "react";
import RadialLine_v2 from "../resources/images/radialLine_v2.svg";
import { addClassIf } from "../utils/strings.utils";
import ChevronLeft from "../resources/icons/chevronLeft.svg";
import { clientsList } from "../data/clientsList";
import ChevronRight from "../resources/icons/chevronRight";

const Slider = () => {
  // ===============
  // = LOCAL STATE =
  // ===============

  const [currentIndex, setCurrentIndex] = useState<number>(12);
  const [imagesPerFrame, setImagesPerFrame] = useState<number>(
    window.innerWidth < 768 ? 1 : 3
  );

  // ================
  // = SIDE EFFECTS =
  // ================

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ===================
  // = ACTION HANDLERS =
  // ===================

  const handleNext = () => {
    if (currentIndex + imagesPerFrame < clientsList.length) {
      setCurrentIndex((prev) => prev + imagesPerFrame);
    }
  };

  const handlePrev = () => {
    if (currentIndex - imagesPerFrame >= 0) {
      setCurrentIndex((prev) => prev - imagesPerFrame);
    }
  };

  const handleResize = () => {
    setImagesPerFrame(window.innerWidth < 768 ? 1 : 3);
  };

  // ==========
  // = RETURN =
  // ==========

  return (
    <div className="trusted-slider mb-100p">
      <h2 className="slider-title">
        <span>Trusted by</span>
        <RadialLine_v2 />
      </h2>
      <p className="slider-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br /> Vitae, in tristique senectus dui pharetra sit.
      </p>
      <div className="slider-container">
        <div
          className={`slider-button ${addClassIf(
            currentIndex - imagesPerFrame < 0,
            "disabled"
          )}`}
          onClick={handlePrev}
          aria-label="Move back in the slideshow"
        >
          <ChevronLeft />
        </div>
        <div className="slides-wrapper">
          <div
            className="slides"
            style={{
              transform: `translateX(-${
                (100 * currentIndex) / imagesPerFrame
              }%)`,
            }}
          >
            {clientsList.map(({ id, image: Image }) => (
              <div className="slide" key={id}>
                <Image />
              </div>
            ))}
          </div>
        </div>

        <div
          role="button"
          className={`slider-button ${addClassIf(
            currentIndex + imagesPerFrame >= clientsList.length,
            "disabled"
          )}`}
          onClick={handleNext}
          aria-label="Move forth in the slideshow"
        >
          <ChevronRight />
        </div>
      </div>
    </div>
  );
};

export default Slider;
