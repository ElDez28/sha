"use client";

import MainHero from "./components/MainHero";
import { useRef } from "react";
import Transformation from "./components/Transformation";
import Difference from "./components/Difference";
import Achtung from "./components/Achtung";
import ContactUs from "./components/ContactUs";
import Links from "./components/Links";
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
import { Provider } from "react-redux";
import store from "@/store/store";

export default function Home() {
  const sectionRef = useRef();
  const handleClick = (e) => {
    e.preventDefault();
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Provider store={store}>
      {" "}
      <div className="flex h-max flex-col gap-1 md:h-screen">
        <MainHero page="home" onClick={handleClick}></MainHero>
      </div>
      <Transformation ref={sectionRef}></Transformation>
      <Difference></Difference>
      <Achtung></Achtung>
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
    </Provider>
  );
}
