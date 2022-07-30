import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="header">
      <div className="header__container">
        <div className="header__logo-container">
          <h1 className="header__logo-text">
            <Link to="/" className="header__logo-link">
              Insatix Web Solutions
            </Link>
          </h1>
        </div>
        <nav className="header__nav-container">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <Link to="/about" className="header__nav-link">
                About
              </Link>
            </li>
            <li className="header__nav-item">
              <Link to="/services" className="header__nav-link">
                Services
              </Link>
            </li>
            <li className="header__nav-item">
              <Link to="/contact" className="header__nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Header;
