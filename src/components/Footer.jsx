import React from "react";

// Routing
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__container">
        <div className="footer__logo-container">
          <h1 className="footer__logo-text">Insatix Web Solutions</h1>
        </div>
        <nav className="footer__nav-container">
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <Link to="/about" className="footer__nav-link">
                About
              </Link>
              <Link to="/services" className="footer__nav-link">
                Services
              </Link>
              <Link to="/contact" className="footer__nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="footer__copuright-container">
          <p className="footer__copyright-text">
            Copyright © 2022 Insatix Web Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
