import React from "react";
import ImageSlider from "../components/ImageSlider";

const Benefits = () => {
  return (
    <section id="benefits">
      <div className="maincontainer">
        <h2 className="section-name">nasze benefity</h2>
        <div className="benefits__content">
          <h2 className="about__content-info--title section-title">
            Nie lubisz granic? U nas ich nie znajdziesz
          </h2>
          <div className="benefits__slider ">
            <ImageSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
