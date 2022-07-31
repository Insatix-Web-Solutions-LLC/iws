import React from "react";

// Routing
import { Link } from "react-router-dom";

// Styles
import Styles from "./styles/Footer.module.scss";

const Footer = () => {
  return (
    <section className={Styles["footer"]}>
      <div className={Styles["footer__container"]}>
        <div className={Styles["footer__logo-container"]}>
          <Link to="/" className={Styles["footer__logo-link"]}>
            Insatix Web solutions
          </Link>
        </div>
        <nav className={Styles["footer__nav-container"]}>
          <ul className={Styles["footer__nav-list"]}>
            <li>
              <Link
                to="/about"
                className={
                  Styles["footer__nav-link"] +
                  " " +
                  Styles["footer__nav-link--first-of-type"]
                }
              >
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className={Styles["footer__nav-link"]}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className={Styles["footer__nav-link"]}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className={Styles["footer__copyright-container"]}>
          <p className={Styles["footer__copyright-text"]}>
            Copyright © 2022 Insatix Web Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
