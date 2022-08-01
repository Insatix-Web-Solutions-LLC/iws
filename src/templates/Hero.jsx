import React from "react";
import { Link } from "react-router-dom";

// Styles
import Styles from "./styles/Hero.module.scss";

const Hero = ({ heading, subHeading, text, btnText, link, image }) => {
  return (
    <section className={Styles.hero}>
      <div className={Styles.hero__container}>
        <div className={Styles.hero__content}>
          <h1 className={Styles.hero__heading}>
            {!heading ? "Please Provide a Heading" : heading}
          </h1>
          <h2 className={Styles.hero__subheading}>
            {!subHeading ? "Please Provide a Subheading" : subHeading}
          </h2>
          <p className={Styles.hero__text}>
            {!text ? "Please Provide Text" : text}
          </p>
          <Link className={Styles.hero__link} to={!link ? "/" : link}>
            {!btnText ? "Please Provide Button Text and Link" : btnText}
          </Link>
        </div>
        <div
          className={
            !image
              ? Styles["hero__image-container--none"]
              : Styles["hero__image-container"]
          }
        >
          <img
            src={image}
            alt="Business Startup"
            className={
              !image ? Styles["hero__image--none"] : Styles.hero__image
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
