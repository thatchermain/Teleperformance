import React from "react";

const Header = () => {
  return (
    <header className="header" id="home">
      <div className="maincontainer">
        <h1 className="header__title">
          Chcesz podróżować <br />
          każdego dnia? <br />Z nami to możliwe!{" "}
        </h1>
        <a href="#jobs">
          <button className="header__button">Aplikuj teraz</button>
        </a>
      </div>
    </header>
  );
};

export default Header;
