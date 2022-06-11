import React from "react";
import IntroImg from "../assets/images/intro.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="maincontainer">
        <div className="intro__content">
          <div className="intro__content-image">
            <img src={IntroImg} alt="Grupa ludzi patrząca na telefon" />
          </div>
          <div className="intro__content-info">
            <h2 className="intro__content-info--title section-title">Jak?</h2>
            <p className="intro__content-info--description section-description">
              Rano sączysz kawę ze znajomymi z Włoch, lunch zjadasz w
              towarzystwie przyjaciół z Hiszpanii lub Kolumbii, a po pracy
              integrujesz się ze swoimi portugalskimi i brazylijskimi
              rówieśnikami. Uczysz się i poznajesz inne kultury. A to wszystko w
              jednym miejscu - w naszym biurze Teleperformance.
            </p>
          </div>
        </div>
        <div className="intro__banner">
          <span className="banner__h1">Teleperformance.</span>
          <br />
          <span className="banner__h1">Tak duży jak Twoje marzenia</span>
        </div>
      </div>
    </section>
  );
};

export default Intro;
