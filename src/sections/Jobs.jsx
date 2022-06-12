import React from "react";

const Jobs = ({ english }) => {
  return (
    <section id="jobs" className="jobs">
      <div className="maincontainer">
        <h2 className="section-name">
          {!english ? "oferty pracy" : "job offers"}
        </h2>
        <h2 className="section-title">
          {!english
            ? "Szukasz idealnej oferty pracy? Mamy ich wiele"
            : "Are you looking for a career? We have many"}
        </h2>
        <div className="jobs__buttons">
          <button
            className="button"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-offset="300"
          >
            Warszawa
          </button>
          <button
            className="button"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-offset="300"
            data-aos-delay="600"
          >
            Katowice
          </button>
          <button
            className="button"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-offset="300"
            data-aos-delay="900"
          >
            Kraków
          </button>
          <button
            className="button"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-offset="300"
            data-aos-delay="1200"
          >
            {!english ? "Praca zdalna" : "Remote work"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
