import { useRef } from "react";
import logo from "../../images/bluetick-logo.webp";
import styles from "./Navbar.module.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(styles.responsive_nav);
  };

  // Function to show the responsive navigation
  const closeNavbar = () => {
    if (navRef.current.classList.contains(styles.responsive_nav)) {
      // Checking if the responsive_nav class is present on the navigation element
      navRef.current.classList.remove(styles.responsive_nav); // Removing the responsive_nav class from the navigation element
    }
  };

  // Rendering the component
  return (
    <header className={`${styles.header}`}>
      {/* Displaying the logo */}
      <img src={logo} alt="" />
      {/* Creating navigation element and setting ref attribute */}
      <nav ref={navRef} className="content-font">
        <a href="#hero" onClick={closeNavbar}>
          Home
        </a>
        <a href="#whatweoffer" onClick={closeNavbar}>
          What We Offer
        </a>
        <a href="#blogs" onClick={closeNavbar}>
          Blogs
        </a>
        <a href="#contact" onClick={closeNavbar}>
          Let's Connect
        </a>
        <button
          className={`${styles.nav_btn} ${styles.nav_close_btn}`}
          onClick={showNavbar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </button>
      </nav>
      <button className={styles.nav_btn} onClick={showNavbar}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </button>
    </header>
  );
}

export default Navbar;
