import React from "react";

// Templates
import Hero from "../templates/Hero";

const Home = () => {
  return (
    <div>
      <Hero
        heading={primaryHeroInfo.heroHeading}
        subHeading={primaryHeroInfo.heroSubheading}
        text={primaryHeroInfo.heroText}
        btnText={primaryHeroInfo.heroBtnText}
        link={primaryHeroInfo.heroLink}
      />
    </div>
  );
};

const primaryHeroInfo = {
  heroHeading: "Jumpstart Your Business",
  heroSubheading:
    "Best in class services to launch your business to the next level",
  heroText:
    "We exceed industry gold standards in delivering digital solutions to meet your business needs. From web design, development and branding, we are here to propel your business to the next level.",
  heroBtnText: "Book Your Discovery Call",
  heroLink: "/contact",
};

export default Home;
