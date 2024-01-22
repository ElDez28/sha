"use client";

import HeroSection from "../components/HeroSection";
import HeroContent from "../components/HeroContent";
import LegalInfo from "../components/LegalInfo";
import Links from "../components/Links";
import ContactUs from "../components/ContactUs";
import bg from "/public/legal.webp";
import bg2 from "/public/legal-lowq.webp";
import Navbar from "../components/Navbar";
import { Provider } from "react-redux";
import store from "@/store/store";

const LegalNoticePage = () => {
  return (
    <Provider store={store}>
      <HeroSection page="legal" bg={bg} bg2={bg2} bgMobile={bg}>
        <HeroContent title={"Legal Notice"}></HeroContent>
      </HeroSection>
      <LegalInfo></LegalInfo>
      <ContactUs></ContactUs>
      <Links></Links>
    </Provider>
  );
};

export default LegalNoticePage;
