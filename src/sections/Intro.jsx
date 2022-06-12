import React from "react";
import IntroImg from "../assets/images/intro.jpg";

const Intro = ({ english }) => {
  return (
    <section id="intro">
      <div className="maincontainer">
        <div className="intro__content">
          <div className="intro__content-image">
            <img src={IntroImg} alt="Grupa ludzi patrząca na telefon" />
          </div>
          <div className="intro__content-info">
            <h2 className="intro__content-info--title section-title">
              {!english ? "Jak?" : "How is it possible?"}
            </h2>
            <p className="intro__content-info--description section-description">
              {!english
                ? "Rano sączysz kawę ze znajomymi z Włoch, lunch zjadasz w towarzystwie przyjaciół z Hiszpanii lub Kolumbii, a po pracy integrujesz się ze swoimi portugalskimi i brazylijskimi rówieśnikami. Uczysz się i poznajesz inne kultury. A to wszystko w jednym miejscu - w naszym biurze Teleperformance."
                : "In the morning you drink coffee with your friends from Italy then you have lunch with your buddies from Spain or Colombia and after work you can integrate chatting with peers from Portugal or Brazil. You can learn and explore other cultures as much as you want. You can do that by staying in just one place - our offices in Kraków, Katowice and Warszawa!"}
            </p>
          </div>
        </div>
        <div className="intro__banner">
          <span className="banner__h1">Teleperformance.</span>
          <br />
          <span className="banner__h1">
            {!english ? "Tak duży jak Twoje marzenia" : "As big as your dreams"}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Intro;
