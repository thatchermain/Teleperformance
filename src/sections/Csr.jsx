import React from "react";
import CsrSlider from "../components/CsrSlider";
import CsrImg from "../assets/images/csr.jfif";
import CertImg from "../assets/images/cert.png";

const Csr = () => {
  return (
    <section id="csr">
      <div className="maincontainer">
        <h2 className="section-name">csr</h2>
        <div>
          <h2 className="csr-info--title section-title">
            Tworząc lepszy i sprawiedliwszy świat
          </h2>
          <p className="csr-info--description">
            Zobowiązujemy się dbać o równość płci, walczyć ze zmianami <br />
            klimatycznymi i wyróżniać się jako innowacyjny pracodawca
            przyszłości.
          </p>
          <div className="csr__slider ">
            <CsrSlider />
          </div>
        </div>
      </div>
      <div className="csr__content maincontainer-margin-left">
        <div className="csr__content-stats">
          <div className="csr__content-stats--cert">
            <img src={CertImg} alt="" />
          </div>
          <div className="csr__content-stats--procentage">
            <div className="csr__content-stats--procentage-top">
              <span className="procentage-number text-gradient">54%</span>
              <p className="procentage-text">
                udział kobiet <br /> wśród zatrudnionych
              </p>
            </div>
            <div className="csr__content-stats--procentage-bottom">
              <span className="procentage-number text-gradient">15%</span>
              <p className="procentage-text">
                zmniejszenie śladu węglowego <br /> na pracownika od 2020 do
                2021
              </p>
            </div>
          </div>
        </div>
        <div className="csr__content-image">
          <img src={CsrImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Csr;
