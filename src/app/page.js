"use client";

import MainHero from "./components/MainHero";
import { useRef } from "react";
import Navbar from "./components/Navbar";
import Transformation from "./components/Transformation";
import Difference from "./components/Difference";
import Achtung from "./components/Achtung";
import ContactUs from "./components/ContactUs";
import Links from "./components/Links";
// import Journey from "../../components/Journey";
// import Experience from "../../components/Experience";
// import Services from "../../components/Services";
// import Technologies from "../../components/Technologies";
// import Success from "../../components/Success";
// import WhyChose from "../../components/WhyChose";
// import Testimonials from "../../components/Testimonials";
// import ContactUs from "../../components/ContactUs";
// import Links from "@/components/Links";

export default function Home() {
  const sectionRef = useRef();
  const handleClick = (e) => {
    e.preventDefault();
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {" "}
      <div className="hero-wrapper flex h-max flex-col gap-1 md:h-screen">
        <Navbar></Navbar>
        <MainHero page="home" onClick={handleClick}></MainHero>
      </div>
      <Transformation ref={sectionRef}></Transformation>
      <Difference></Difference>
      <Achtung></Achtung>
      <ContactUs></ContactUs>
      <Links></Links>
      {/* <Journey ref={sectionRef} t={homeT}></Journey>
      <Experience t={homeT}></Experience>
      <Services locale={props.locale} t={homeT}></Services>
      <Technologies t={homeT}></Technologies>
      <Success t={homeT}></Success>
      <WhyChose t={homeT}></WhyChose>
      <Testimonials t={homeT}></Testimonials>
      <ContactUs t={contactT}></ContactUs>
      <Links locale={props.locale} t={footerT}></Links> */}
    </>
  );
}
