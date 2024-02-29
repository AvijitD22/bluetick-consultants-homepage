import React from "react";
import styles from "./Footer.module.css";
// Importing logos and Images
import logo from "../../images/bluetick-logo-white.svg";
import glassdoor_rating from "../../images/glassdoor-rating.webp";
import bluetick_iso from "../../images/bluetick-iso.webp";
import right_arrow from "../../images/right_arrow.svg";
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import threads from "../../images/threads.png";
import twitter from "../../images/twitter.png";
import quora from "../../images/quora.png";
import linkedin from "../../images/linkedin.png";

const Footer = () => {
  return (
    <section className={styles.footer}>
      {/* Left section of the footer */}
      <div className={styles.footer_items}>
        <img src={logo} alt="Bluetick Logo" className={styles.bluetick_logo} />
        <h3 className="heading-font">Bluetick Consultants LLP</h3>
        <a href="mailto:contact@bluetickconsultants.com">
          <p className="content-font">contact@bluetickconsultants.com</p>
        </a>
        {/* Displaying Glassdoor rating and Bluetick ISO certification */}
        <div className={styles.footer_rating_images}>
          <img
            className={styles.glassdoor_rating}
            src={glassdoor_rating}
            alt="Glassdoor Rating"
          />
          <img
            src={bluetick_iso}
            alt="Bluetick ISO Certification"
            className={styles.iso}
          />
        </div>
      </div>
      {/* Right section of the footer */}
      <div className={styles.footer_items}>
        {/* Resources and Products */}
        <div className={styles.resource_products}>
          <div>
            <h4 className="heading-font">RESOURCES</h4>
            {/* Links to resources */}
            <div className={styles.resource_products_link_items}>
              <a
                href="#blogs"
                className={`${styles.resource_products_links} content-font`}
              >
                <img src={right_arrow} alt="" />
                <p>Blogs</p>
              </a>
            </div>
          </div>
          <div>
            <h4 className="heading-font">PRODUCTS</h4>
            {/* Links to products */}
            <div className={`${styles.resource_products_links} content-font`}>
              <a href="#top" className={styles.resource_products_links}>
                <img src={right_arrow} alt="" />
                <p>Talk to Code</p>
              </a>
              <a href="#top" className={styles.resource_products_links}>
                <img src={right_arrow} alt="" />
                <p>InterviewGPT</p>
              </a>
              <a href="#top" className={styles.resource_products_links}>
                <img src={right_arrow} alt="" />
                <p>PrivacyDoc</p>
              </a>
              <a href="#top" className={styles.resource_products_links}>
                <img src={right_arrow} alt="" />
                <p>Sales Call Evaluator</p>
              </a>
            </div>
          </div>
        </div>
        {/* Social media links and copyright */}
        <div className={styles.social_links_copyright}>
          <a href="https://facebook.com/" className={styles.social}>
            <img src={facebook} alt="Facebook Icon" />
          </a>
          <a href="https://www.instagram.com/" className={styles.social}>
            <img src={instagram} alt="Instagram Icon" />
          </a>
          <a href="https://www.threads.net/" className={styles.social}>
            <img src={threads} alt="Threads Icon" />
          </a>
          <a href="https://twitter.com/" className={styles.social}>
            <img src={twitter} alt="Twitter Icon" />
          </a>
          <a href="https://www.linkedin.com/" className={styles.social}>
            <img src={linkedin} alt="Linkedin Icon" />
          </a>
          <a href="https://www.quora.com/" className={styles.social}>
            <img src={quora} alt="Quora Icon" />
          </a>
          {/* Copyright */}
          <p className="content-font">
            2024 © All rights reserved by Bluetick Consultants LLP
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
