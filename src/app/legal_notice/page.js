"use client";

import HeroSection from "../components/HeroSection";
import HeroContent from "../components/HeroContent";
import LegalInfo from "../components/LegalInfo";
import Links from "../components/Links";
import ContactUs from "../components/ContactUs";
import bg from "/public/legal.webp";
import bg2 from "/public/legal-lowq.webp";
import Navbar from "../components/Navbar";

const LegalNoticePage = () => {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection page="legal" bg={bg} bg2={bg2} bgMobile={bg}>
        <HeroContent title={"Impressum"}></HeroContent>
      </HeroSection>
      <LegalInfo></LegalInfo>
      <ContactUs></ContactUs>
      <Links></Links>
    </>
  );
};

export default LegalNoticePage;
