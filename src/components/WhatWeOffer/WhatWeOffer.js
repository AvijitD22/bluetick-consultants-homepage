import React from "react";
import styles from "./WhatWeOffer.module.css";
import offer_logo from "../../images/offer_logo.svg";

const WhatWeOffer = () => {
  // Data array containing information about what is services
  const data = [
    {
      id: 1,
      heading: "Explore AI Opportunities for Your Enterprise",
      description:
        "Unlock the potential of generative AI by identifying tailored opportunities for integration within your organization, ensuring a strategic and efficient approach to AI implementation.",
    },
    {
      id: 2,
      heading: "Design AI Trust Layer",
      description:
        "Prioritize data security and build trust in generative AI applications with a dedicated trust layer, emphasizing privacy-focused solutions that safeguard both organizational and customer data.",
    },
    {
      id: 3,
      heading: "Scalability-Focused Solutions",
      description:
        "Streamline and optimize business processes with comprehensive workflow automation,ensuring seamless integration of AI technologies from inception to execution for increased efficiency and productivity.",
    },
    {
      id: 4,
      heading: "End to end Workflow automation",
      description:
        "Implement cutting-edge, scalable generative AI solutions that not only meet current organizational needs but also adapt and grow with the evolving demands of your enterprise,providing a future-proof approach to AI integration.",
    },
  ];

  // Rendering the component
  return (
    <section className={styles.whatweoffer_section} id="whatweoffer">
      <h2 className={`heading-font ${styles.section_heading}`}>
        {/* Displaying the section heading */}
        What We Offer
      </h2>
      <div className={styles.whatweoffer_items}>
        {/* Mapping through the data array to render offer details */}
        {data.map((item) => (
          <article className={styles.offer_details} key={item.id}>
            <img src={offer_logo} alt="" />
            <h3 className={`heading-font ${styles.offer_heading}`}>
              {/* Displaying offer heading */}
              {item.heading}
            </h3>
            <p className={`content-font ${styles.offer_description}`}>
              {/* Displaying offer description */}
              {item.description}
            </p>
            <a href="#contact">
              <button className={`content-font ${styles.discuss_button}`}>
                {/* Button to initiate discussion */}
                Let's Discuss
              </button>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WhatWeOffer;
