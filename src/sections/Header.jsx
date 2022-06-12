import React from "react";

const Header = ({ english }) => {
  return (
    <header className="header" id="home">
      <div className="maincontainer">
        <h1 className="header__title">
          {!english ? "Chcesz podróżować" : "Want to travel "}
          <br />
          {!english ? "każdego dnia?" : "every day?"}
          <br />
          {!english ? "Z nami to możliwe!" : "It’s possible with us!"}
        </h1>
        <a href="#jobs">
          <button className="header__button">
            {!english ? "Aplikuj teraz" : "Apply now"}
          </button>
        </a>
      </div>
    </header>
  );
};

export default Header;
