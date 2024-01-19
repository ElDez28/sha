import React from "react";
import Wrapper from "./Wrapper";
import Header from "./Header";
import { CiWarning } from "react-icons/ci";

const Achtung = () => {
  return (
    <Wrapper>
      <Header title={"ACHTUNG"}></Header>
      <div className="flex items-center justify-center relative mx-auto mb-10">
        <CiWarning className="w-[24rem] h-[24rem] opacity-20 absolute md:left-0"></CiWarning>
        <p className="max-w-[60rem]">
          Die mentalen Therapien sind zur Entspannung und Selbstfindung gedacht.
          Bitte beachte: Sie sind kein medizinisches oder therapeutisches Mittel
          und dienen nicht der Diagnose, Behandlung, Heilung oder Vorbeugung von
          Beschwerden. Ich bin ein mobiler Mentaltherapie-Coach und biete
          Hausbesuche an, aber auch Besuche bei mir. Falls du an einer
          Katzenallergie leidest, ist Letztere Option ausgeschlossen.
        </p>
      </div>
    </Wrapper>
  );
};

export default Achtung;
