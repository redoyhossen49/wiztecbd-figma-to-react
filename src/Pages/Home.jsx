import React from "react";
import Buy from "./Buy";
import HeroMetrics from "../components/HeroMetrics";
import RevenueStreamSection from "../components/RevenueStreamSection";
import TestimonialSection from "../components/TestimonialSection";
import EssentialTools from "../components/EssentialTools";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <Buy></Buy>
      <HeroMetrics></HeroMetrics>
      <RevenueStreamSection></RevenueStreamSection>
      <TestimonialSection></TestimonialSection>
      <EssentialTools></EssentialTools>
      <Footer></Footer>
    </>
  );
};

export default Home;
