import React from "react";
import styles from "./HeroSection.module.css";
// Importing Typed.js library for typewriter effect
import Typed from "typed.js";

const HeroSection = () => {
  // Creating a reference to the span element
  const el = React.useRef(null);

  // Using useEffect hook to initialize Typed.js when component mounts
  React.useEffect(() => {
    // Creating a new instance of Typed.js
    const typed = new Typed(el.current, {
      strings: ["cutting-edge ", "scalable ", "privacy-focused "],
      typeSpeed: 70,
      loop: true,
      showCursor: false,
    });

    return () => {
      // Cleaning up Typed.js instance when component unmounts
      typed.destroy();
    };
  }, []); // Empty dependency array to ensure useEffect runs only once

  // Rendering the component
  return (
    <section className={styles.hero_section} id="hero">
      {/* First heading */}
      <h1 className={`heading-font`}>
        Founded in 2017,{" "}
        <span style={{ fontSize: "2rem" }}>Bluetick Consultants</span> is a
        technology-driven firm that has made a significant impact in the Indian
        and US startup ecosystems.
      </h1>
      <br />
      {/* Second heading with Typed.js typewriter effect */}
      <h2 className={`heading-font`}>
        Transforming Enterprises with <span ref={el} />
        <span> </span>Generative AI Solutions
      </h2>
      <br />
      {/* Button to know more */}
      <a
        href="https://www.bluetickconsultants.com/generative-ai.html"
        target="_blank"
        rel="noreferrer"
      >
        <button className={`${styles.know_more} content-font`}>
          To know more about us
        </button>
      </a>
    </section>
  );
};

export default HeroSection;
