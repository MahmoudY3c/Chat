import React, { useEffect, useState } from "react";
import Logo from "../../assests/email 3.png";
import login from "../../assests/login.svg";
import signup from "../../assests/user.svg";
import mobileMenu from "../../assests/menu.svg";
import MobileNavActions from "../../components/MobileNavActions/MobileNavActions";
import ROUTES from "../../Routes";
import { Link } from "react-router-dom";

function Nav() {
  const [bg, setBg] = useState('')
  function changeBg(e) {
    if (window.scrollY >= document.querySelector('header').offsetHeight - document.querySelector('nav').offsetHeight) setBg("navbar--active")
    else setBg('')
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBg)
    return () => window.removeEventListener('scroll', changeBg)
  }, []);

  return (
    <nav className={`navbar container ${bg}`}>
      <div className="navbar__left">
        <div className="navbar__left__logo">
          <img src={Logo} alt="logo" />
        </div>
        <ul className="navbar__left__menu">
          {ROUTES?.map((route) => {
            return (
              <li className="navbar__left__menu__item" key={route.key}>
                <Link
                  to={route.path}
                  className="navbar__left__menu__item__link"
                >
                  {route.key}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="navbar__right">
        <div className="navbar__right__actions">
          <div className="navbar__right__actions__item">
            <MobileNavActions path="/" img={login} title="Login" />
            <Link to="/" className="btn btn--primary btn--l btn--rounded">
              Login
            </Link>
          </div>
          <div className="navbar__right__actions__item">
            <MobileNavActions path="/" img={signup} title="Signup" />
            <Link to="/" className="btn btn--secondary btn--l btn--rounded">
              SignUp
            </Link>
          </div>
        </div>
        <div className="navbar__right__mobile-menu">
          <img src={mobileMenu} alt="mobileMenu" />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
