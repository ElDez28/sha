"use client";

import MainHero from "./components/MainHero";
import { useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import Transformation from "./components/Transformation";
import Difference from "./components/Difference";
import Achtung from "./components/Achtung";
import ContactUs from "./components/ContactUs";
import Links from "./components/Links";
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
import Pricing from "./components/Pricing";
import Quote from "./components/Quote";

export default function Home() {
  const sectionRef = useRef();
  const handleClick = (e) => {
    e.preventDefault();
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {" "}
      <div className="hero-wrapper flex h-max flex-col gap-1 md:h-screen">
        <Navbar></Navbar>
        <MainHero page="home" onClick={handleClick}></MainHero>
      </div>
      <Transformation ref={sectionRef}></Transformation>
      <Difference></Difference>
      <Quote></Quote>
      <Achtung></Achtung>
      <Pricing></Pricing>
      <ContactUs></ContactUs>
      <Links></Links>
      <WhatsAppWidget
        phoneNo="+49017676649854" // Replace with your WhatsApp number
        messageBoxTxt={true}
        placeholder="Gib eine Nachricht ein..."
        chatMessage={
          <>
            Hallo 👋 <br />
            <br /> Wie kann ich Ihnen helfen?
          </>
        }
        headerTitle="Kundensupport"
        btnTxt="Chat starten"
      />
    </>
  );
}
