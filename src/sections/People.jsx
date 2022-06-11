import React from "react";
import People1 from "../assets/images/people1.jfif";
import People2 from "../assets/images/people2.jfif";
import People3 from "../assets/images/people3.jfif";

const People = () => {
  return (
    <section id="people">
      <div className="maincontainer">
        <h2 className="section-name">o nas</h2>
        <h2 className="people__content-info--title section-title">
          Zatrudniamy i rozwijamy <br /> największe talenty w branży
        </h2>
        <div className="people__content">
          <div className="people__content--images">
            <div className="images__left">
              <img src={People1} alt="" />
            </div>
            <div className="images__right">
              <div className="images__right--top">
                <img src={People2} alt="" />
              </div>
              <div className="images__right--bottom">
                <img src={People3} alt="" />
              </div>
            </div>
          </div>
          <div className="people__content--info">
            <p>
              Korzystamy z odpowiedzialnych, i skutecznych metod rekrutacji, aby
              przyciągać najlepsze talenty. Inwestujemy w rozwój pracowników,
              wzmacniając ich poczucie własnej wartości i tym samym motywując do
              dalszego rozwoju.
              <br />
              <br />
              Różnorodność, inkluzywność i równość to podstawy naszej kultury.
              Jesteśmy najbardziej zróżnicowanym globalnie dostawcą usług
              biznesowych w branży. Wierzymy, że nasze różnice czynią nas
              silniejszymi. Jesteśmy dużą grupą, ale działamy solidarnie.
            </p>
          </div>
        </div>
        <div className="people__banner banner">
          <span className="banner__h1">Jesteś ambitny? My również</span>
        </div>
      </div>
    </section>
  );
};

export default People;
