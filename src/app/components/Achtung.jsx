import React from "react";
import Wrapper from "./Wrapper";
import Header from "./Header";
import { CiWarning } from "react-icons/ci";
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";

const Achtung = () => {
  return (
    <Wrapper>
      <Header title={"ACHTUNG"}></Header>
      <div className="flex items-center justify-center relative mx-auto mb-10">
        <div className="flex-1 absolute md:left-0">
          <CiWarning className="opacity-20  w-[12rem] h-[12rem] md:w-[24rem] md:h-[24rem]"></CiWarning>
        </div>
        <p className="max-w-[60rem]">
          Die mentalen Therapien sind zur Entspannung und Selbstfindung gedacht.
          Bitte beachte: Sie sind kein medizinisches oder therapeutisches Mittel
          und dienen nicht der Diagnose, Behandlung, Heilung oder Vorbeugung von
          Beschwerden. Ich bin ein mobiler Mentaltherapie-Coach und biete
          Hausbesuche an, aber auch Besuche bei mir. Falls du an einer
          Katzenallergie leidest, ist Letztere Option ausgeschlossen.
        </p>
      </div>
      <WhatsAppWidget
        phoneNo="017676649854" // Replace with your WhatsApp number
        messageBoxTxt={true}
        placeholder="Type a message.."
        chatMessage={
          <>
            Hallo 👋 <br />
            <br /> Wie kann ich Ihnen helfen?
          </>
        }
        headerTitle="Kundensupport"
        btnTxt="Chat starten"
      />
    </Wrapper>
  );
};

export default Achtung;
