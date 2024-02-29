import React from "react";

// Importing components
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/HeroSection/HeroSection";
import WhatWeOffer from "../../components/WhatWeOffer/WhatWeOffer";
import Blogs from "../../components/Blogs/Blogs";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

const index = () => {
  return (
    <div>
      {/* Rendering Components */}
      <Navbar />
      <HeroSection />
      <WhatWeOffer />
      <Blogs />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default index;
