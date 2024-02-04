import React from "react";
import Wrapper from "./Wrapper";
import Header from "./Header";
import { motion } from "framer-motion";
import { CiWarning } from "react-icons/ci";
import { sectionsAnimationsVariants } from "../animations/animations";

const Achtung = () => {
  return (
    <motion.div
      variants={sectionsAnimationsVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Wrapper>
        <Header title={"ACHTUNG"}></Header>
        <div className="flex items-center justify-center relative mx-auto my-12">
          <div className="flex-1 absolute md:left-0">
            <CiWarning className="opacity-20  w-[12rem] h-[12rem] md:w-[24rem] md:h-[24rem]"></CiWarning>
          </div>
          <p className="max-w-[60rem]">
            Die Hypnose ist zur Entspannung und Selbstfindung gedacht. Bitte
            beachte: Sie ist kein medizinisches oder therapeutisches Mittel und
            dient nicht der Diagnose, Behandlung, Heilung oder Vorbeugung von
            Beschwerden. Bitte wenden Sie sich hierfür an einen Arzt oder
            Heilpraktiker. Ich bin mobiler Mentalcoach und biete Hausbesuche an,
            aber auch Besuche bei mir. Falls du an einer Katzenallergie leidest,
            ist Letztere Option ausgeschlossen.
          </p>
        </div>
      </Wrapper>
    </motion.div>
  );
};

export default Achtung;
