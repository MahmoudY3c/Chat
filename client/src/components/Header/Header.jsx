import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header ">
      <div className="header__left">
        <div className="header__left__content">
          <h1 className="header__left__content__title">What is Lorem Ipsum?</h1>
          <p className="header__left__content__description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type
          </p>
          <div className="header__left__content__actions">
            <div className="header__left__content__actions__item">
              <Link to="/" className="btn btn--primary btn--l btn--rounded">
                Features
              </Link>
            </div>
            <div className="header__left__content__actions__item">
              <Link to="/" className="btn btn--secondary btn--l btn--rounded">
                Features
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="header__right">
        <div className="header__right__img">
          <img src={require("../../assests/email 3.png")} alt="description" />
        </div>
      </div>
    </header>
  );
};

export default Header;
