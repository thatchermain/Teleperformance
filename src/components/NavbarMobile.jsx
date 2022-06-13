import React, { useState } from "react";
import Logo from "../assets/images/Logo.png";
import LogoMobileActive from "../assets/images/LogoMobileActive.png";

const NavbarMobile = ({ toggle, isOpen, setIsOpen, english, setEnglish }) => {
  const [showMobile, setShowMobile] = useState(false);
  const [fixed, setFixed] = useState(false);

  const isFixed = () => {
    if (window.scrollY > 800) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };
  window.addEventListener("scroll", isFixed);

  const toggleMobile = () => {
    setShowMobile(!showMobile);
    console.log(showMobile);
  };

  return (
    <nav
      className={`${fixed ? "mobilenav-fixed" : "mobilenav"} ${
        showMobile ? `navActive` : `mobilenav`
      }`}
    >
      {/* <nav className={showMobile ? `navActive` : `mobilenav`}> */}
      <div className="mobilenav__wrapper">
        <div className="mobilenav__logo">
          <a href="#home">
            {!showMobile ? (
              <img src={Logo} alt="ArcelorMittal Brand Logo" />
            ) : (
              <img
                src={LogoMobileActive}
                alt="ArcelorMittal Brand Logo"
                className="logomobile__active"
              />
            )}
          </a>
        </div>
        <div className="mobilenav__hamburger" onClick={toggleMobile}>
          <div className="mobilenav__logo">
            <div
              className={!showMobile ? `mobilenav__open` : `mobile__nav__close`}
            ></div>
          </div>
        </div>
      </div>
      <div className={showMobile ? `mobilenav__active` : `mobilenav__hidden`}>
        <ul className="mobilenav__list">
          <li
            className="'mobilenav__list-item'"
            onClick={() => setShowMobile(false)}
          >
            <a className="linkMobile" href="#about">
              {!english ? "O nas" : "About us"}
            </a>
          </li>
          <li
            className="'mobilenav__list-item'"
            onClick={() => setShowMobile(false)}
          >
            <a className="linkMobile" href="#benefits">
              {!english ? "Benefity" : "Benefits"}
            </a>
          </li>
          <li
            className="'mobilenav__list-item'"
            onClick={() => setShowMobile(false)}
          >
            <a className="linkMobile" href="#values">
              {!english ? "Nasze wartości" : "Our values"}
            </a>
          </li>
          <li
            className="'mobilenav__list-item'"
            onClick={() => setShowMobile(false)}
          >
            <a className="linkMobile" href="#csr">
              {!english ? "CSR" : "CSR"}
            </a>
          </li>
          <li
            className="'mobilenav__list-item'"
            onClick={() => setShowMobile(false)}
          >
            <a className="linkMobile" href="#jobs">
              {!english ? " Oferty pracy" : "Job offers"}
            </a>
          </li>
          <li
            className="'mobilenav__list-item'"
            onClick={() => setShowMobile(false)}
          >
            <a className="linkMobile" href="#contact">
              {!english ? "Kontakt" : "Contact"}
            </a>
          </li>
          <button
            className="mobilenav__button"
            onClick={() => setEnglish(!english)}
          >
            {!english ? "EN" : "PL"}
          </button>
          {/* <li
              className="mobilenav__list-item"
              onClick={() => setShowMobile(false)}
            >
              <a className="linkMobile" href="#o_nas">
                O nas
              </a>
            </li>
            <li
              className="mobilenav__list-item"
              onClick={() => setShowMobile(false)}
            >
              <a className="linkMobile" href="#staze">
                Staże
              </a>
            </li>
            <li
              className="mobilenav__list-item"
              onClick={() => setShowMobile(false)}
            >
              <a className="linkMobile" href="#praktyki">
                Praktyki
              </a>
            </li>
            <li
              className="mobilenav__list-item"
              onClick={() => setShowMobile(false)}
            >
              <a className="linkMobile" href="#praca">
                Praca
              </a>
            </li>
            <li
              className="mobilenav__list-item"
              onClick={() => setShowMobile(false)}
            >
              <a className="linkMobile" href="#rekrutacja">
                Rekrutacja
              </a>
            </li>
            <li
              className="mobilenav__list-item"
              onClick={() => setShowMobile(false)}
              toggle={toggle}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            >
              <a className="linkMobile" href="#staze">
                Benefity
              </a>
            </li>
            <li
              className="mobilenav__list-item"
              onClick={() => setShowMobile(false)}
            >
              <a className="linkMobile" href="#wartosci">
                Wartości
              </a>
            </li>
            <li
              className="mobilenav__list-item"
              onClick={() => setShowMobile(false)}
            >
              <a className="linkMobile" href="#wspolpraca">
                Nasze współprace
              </a>
            </li>
            <li
              className="mobilenav__list-item"
              onClick={() => setShowMobile(false)}
            >
              <a className="linkMobile" href="#kontakt">
                Kontakt
              </a>
            </li> */}
        </ul>
      </div>
      {/* </nav> */}
    </nav>
  );
};

export default NavbarMobile;
