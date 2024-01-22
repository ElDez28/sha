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
import { Provider } from "react-redux";
import store from "@/store/store";

const Privacy_And_Policy = () => {
  return (
    <Provider store={store}>
      <HeroSection page="privacy" bg={bg} bg2={bg2} bgMobile={bgMobile}>
        <HeroContent title={"Privacy & Policy"}></HeroContent>
      </HeroSection>
      <PrivacyInfo></PrivacyInfo>
      <ContactUs></ContactUs>
      <Links></Links>
    </Provider>
  );
};

export default Privacy_And_Policy;
