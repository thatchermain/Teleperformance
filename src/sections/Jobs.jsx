import React from "react";

const Jobs = () => {
  return (
    <section id="jobs">
      <div className="maincontainer">
        <h2 className="section-name">oferty pracy</h2>
        <h2 className="section-title">
          Szukasz idealnej oferty pracy? Mamy ich wiele
        </h2>
        <div className="jobs__buttons">
          <button className="button">Warszawa</button>
          <button className="button">Katowice</button>
          <button className="button">Kraków</button>
          <button className="button">Praca zdalna</button>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
