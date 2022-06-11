import React from "react";
import ValuesImg from "../assets/images/values.jfif";

const Values = () => {
  return (
    <section id="values">
      <div className="maincontainer-margin-right">
        <div className="values__content">
          <div className="values__content-image">
            <img src={ValuesImg} alt="" />
          </div>
          <div className="values__content-info">
            <h2 className="section-name section-name--white">nasze wartości</h2>
            <h2 className="values__content-info--title section-title">
              Różnorodna kultura oparta na ludzkich wartościach
            </h2>
            <p className="values__content-info--description section-description">
              Wiemy, że za to pracownicy stanowią największy kapitał w naszej
              organizacji. Ludzi i pracę zespołową stawiamy zawsze na pierwszym
              miejscu. Inwestujemy w miejsca pracy, które inspirują naszych
              pracowników do uczenia siebie i innych, do rozwoju i realizacji
              celów. Motywujemy do działania, dokonujemy zmian, bo Twoje sprawy
              to nasze sprawy. Razem budujemy partnerskie relacje, które zdają
              egzamin.
            </p>
          </div>
        </div>
      </div>
      <div className="values__banner maincontainer">
        <span className="banner__h1">
          Bądź częścią czegoś więcej niż tylko praca
        </span>
      </div>
      <button className="values__content-button button">
        Dołącz do nas już dziś!
      </button>
    </section>
  );
};

export default Values;
