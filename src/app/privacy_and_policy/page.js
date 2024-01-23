"use client";

import ContactUs from "../components/ContactUs";
import Links from "../components/Links";
import HeroSection from "../components/HeroSection";
import HeroContent from "../components/HeroContent";
import PrivacyInfo from "../components/PrivacyInfo";
import bg from "/public/privacy.webp";
import bg2 from "/public/privacy-lowq.webp";
import bgMobile from "/public/privacy-mobile.webp";
import Navbar from "../components/Navbar";

const Privacy_And_Policy = () => {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection page="privacy" bg={bg} bg2={bg2} bgMobile={bgMobile}>
        <HeroContent title={"Datenschutz & Richtlinien"}></HeroContent>
      </HeroSection>
      <PrivacyInfo></PrivacyInfo>
      <ContactUs></ContactUs>
      <Links></Links>
    </>
  );
};

export default Privacy_And_Policy;
