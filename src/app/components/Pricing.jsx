import Image from "next/image";
import Wrapper from "./Wrapper";
import { motion } from "framer-motion";
import { LuEuro } from "react-icons/lu";
import Header from "./Header";
import doctor from "/public/doctor.png";
import weight from "/public/lose-weight.png";
import { sectionsAnimationsVariants } from "../animations/animations";
import { PiArrowBendUpLeftThin } from "react-icons/pi";

const Card = ({ title, price, icon, alt, full = true }) => {
  return (
    <div className="mx-auto flex items-center justify-center">
      <div className="w-full rounded-3xl bg-gradient-to-r from-blue-400 to-pink-400 p-[4px]">
        <div
          className={`h-full w-full rounded-[calc(1.5rem-4px)] px-8 md:px-12 py-12  text-center bg-[#f7f7f7]`}
        >
          <div className="flex flex-col items-center">
            <Image src={icon} alt={alt}></Image>
            <h2 className="font-bold text-xl md:text-2xl mb-6">{title}</h2>
            <div className="flex items-center">
              <h2
                className={`font-bold md:text-6xl text-4xl ${
                  full ? "text-gray-200" : "text-[#1e749e]"
                }`}
              >
                {price}
              </h2>
              <LuEuro className="text-2xl md:text-4xl mt-6"></LuEuro>
              <span className="mt-8">/sitzung</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Pricing = () => {
  return (
    <motion.div
      variants={sectionsAnimationsVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Wrapper>
        <Header title={"PREISLISTE"}></Header>
        <div className="grid grid-cols-1 md:grid-cols-2 content-center justify-center gap-16 mt-20">
          <Card
            icon={doctor}
            full={false}
            title="Gesprächs&shy;hypnose mit Thema nach Wahl"
            price="119"
            alt={"two women talking"}
          ></Card>
          <div className="flex flex-col">
            <PiArrowBendUpLeftThin className="lg:text-[24rem] md:text-[12rem] p-0 text-gray-200 hidden md:block font-extra-bold"></PiArrowBendUpLeftThin>
            <p className="font-bold text-gray-600 text-[2rem] md:text-[4rem] leading-tight mt-10 normal:-mt-10 md:mt-0">
              Unsere Preisliste
            </p>
            <p className="mt-4 md:mt-8 font-bold text-gray-600">
              Bitte scheue Dich nicht nach Kennenlernangeboten oder Sonderpreise
              für Schüler, Azubis, Studenten oder bei geringem Einkommen zu
              erfragen!
            </p>
          </div>
        </div>
      </Wrapper>
    </motion.div>
  );
};

export default Pricing;
