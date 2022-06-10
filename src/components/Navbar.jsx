import React from "react";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="maincontainer navbar__content">
        <div className="navbar__logo">
          <a href="#home">
            <img src={Logo} alt="ArcelorMittal Brand Logo" />
          </a>
        </div>
        <div className="navbar__menu">
          <ul className="navbar__list">
            <li className="navbar__item">
              <a className="navbar__link" href="#o_nas">
                O nas
              </a>
            </li>
            <li className="navbar__item">
              <a className="navbar__link" href="#benefity">
                Benefity
              </a>
            </li>
            <li className="navbar__item">
              <a className="navbar__link" href="#wartości">
                Nasze wartości
              </a>
            </li>
            <li className="navbar__item">
              <a className="navbar__link" href="#csr">
                CSR
              </a>
            </li>
            <li className="navbar__item">
              <a className="navbar__link" href="#praca">
                Oferty pracy
              </a>
            </li>
            <li
              className="navbar__item"
              //   onClick={toggle}
              //   toggle={toggle}
              //   isOpen={isOpen}
              //   setIsOpen={setIsOpen}
            >
              <a className="navbar__link" href="#kontakt">
                Kontakt
              </a>
            </li>
            <button>EN - PL</button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
