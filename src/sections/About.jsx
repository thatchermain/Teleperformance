import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="maincontainer">
        <h2 className="section-name">o nas</h2>
        <div className="about__content">
          <div className="about__content-info">
            <h2 className="about__content-info--title section-title">
              Teleperformance to światowy lider w zakresie spersonalizowanej i
              wielokanałowej obsługi oraz zarządzania relacjami z klientem.{" "}
            </h2>
            <p className="about__content-info--description section-description">
              Koncentrując się na dostarczaniu wyjątkowych usług biznesowych,
              firma zapewnia zintegrowane podejście OneOffice, obejmujące
              zarządzanie doświadczeniami klientów, usługi back-office i
              optymalizację procesów biznesowych. Kompleksowe portfolio
              rozwiązań pomaga organizacjom zwiększyć wydajność biznesową a
              także poprawić lojalność klientów. Wszystko to poprzez
              zrównoważenie zaawansowanych technologicznie rozwiązań z
              podejściem skoncentrowanym na potrzebach odbiorców praktyk
              biznesowych.
              <br />
              <br />
              Teleperformance Polska obecne jest na polskim rynku nieprzerwanie
              od 20 lat. Działamy w czterech oddziałach zlokalizowanych w
              Warszawie, Krakowie i Katowicach.
            </p>
            <button className="about__content-button button">
              Dołącz do nas już dziś!
            </button>
          </div>
          <div className="about__content-stats">
            <div className="about__content-stats--stat about__content-stats--stat-one">
              <span className="stat-text-gray">Obecnie zatrudniamy</span>
              <span className="stat-number text-gradient">1,700</span>
              <span className="stat-text-pink">pełnych pasji pracowników</span>
            </div>
            <div className="about__content-stats--stat about__content-stats--stat-two">
              <span className="stat-text-gray">obywateli ponad</span>
              <span className="stat-number text-gradient">55</span>
              <span className="stat-text-pink">różnych krajów</span>
            </div>
            <div className="about__content-stats--stat about__content-stats--stat-three">
              <span className="stat-text-gray">którzy obsługują rynki w</span>
              <span className="stat-number text-gradient">20</span>
              <span className="stat-text-pink">językach</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
