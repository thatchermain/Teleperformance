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
          <button className="button">Warszawa</button>
          <button className="button">Katowice</button>
          <button className="button">Kraków</button>
          <button className="button">
            {!english ? "Praca zdalna" : "Remote work"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
