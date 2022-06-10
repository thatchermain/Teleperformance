import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="maincontainer">
        <h1 className="header__title">
          Chcesz podróżować <br />
          każdego dnia? <br />Z nami to możliwe!{" "}
        </h1>
        <button className="header__button">Aplikuj teraz</button>
      </div>
    </header>
  );
};

export default Header;
