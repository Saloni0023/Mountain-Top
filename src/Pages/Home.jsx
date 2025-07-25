import React from "react";
import Hero from "../components/Hero";
import ContactSection from "../components/ContactSection";
import FeatureSection from "../components/FeatureSection";
import Services from "../components/Services";
import Clean from "../components/Clean";
import WhyChoose from "../components/WhyChoose";
import GoogleReviews from "../components/GoogleReviews";
import AreaWeServe from "../components/AreaWeServe";
import Map from "../components/Map";
import BlogSection from "../components/BlogSection";

const Home = () => {
  return (
    <>
      <Hero />
      <ContactSection />
      <FeatureSection />
      <Services />
      <Clean />
      <WhyChoose />
      <GoogleReviews />
      <AreaWeServe />
      <Map />
      <BlogSection />
    </>
  );
};

export default Home;
