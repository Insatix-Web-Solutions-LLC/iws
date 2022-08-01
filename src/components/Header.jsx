import React from "react";

// Routing
import { Link } from "react-router-dom";

// Logo
import Logo from "../assets/images/Insatix-Logo-Animated.gif";

// Styles
import Styles from "./styles/Header.module.scss";

const Header = () => {
  return (
    <section className={Styles.header}>
      <div className={Styles["header__row"]}>
        <div className={Styles["header__logo-container"]}>
          <Link to="/" className={Styles["header__logo-link"]}>
            <img
              src={Logo}
              alt="Insatix Logo"
              className={Styles["header__logo-image"]}
            />
          </Link>
        </div>
        <nav className={Styles["header__nav-wrapper"]}>
          <ul className={Styles["header__nav-list"]}>
            <li>
              <Link
                to="/about"
                className={
                  Styles["header__nav-link"] +
                  " " +
                  Styles["header__nav-link--first-of-type"]
                }
              >
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className={Styles["header__nav-link"]}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className={Styles["header__nav-link"]}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className={Styles["header__cta-container"]}>
          <Link to="/contact" className={Styles["header__cta-button"]}>
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
