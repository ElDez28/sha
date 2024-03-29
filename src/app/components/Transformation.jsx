import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { RiMentalHealthLine } from "react-icons/ri";
import { forwardRef } from "react";
import { subheadingFs } from "../lib/fontSizes";
import TransformationCard from "./TransformationCard";
import Header from "./Header";
import flowers from "/public/flowers.webp";
import { slideFromLeft, slideFromRight } from "../animations/animations";

const Transformation = (props, ref) => {
  return (
    <section ref={ref} className="relative border-b-2 py-24">
      <div className="z-10 mx-auto mt-12 max-w-[90rem] text-center">
        <Header title="DEINE TRANSFORMATION DURCH HYPNOSE"></Header>
        <p className={`${subheadingFs}`}></p>
        <div className="grid max-h-max grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:px-8 xl:grid-cols-2 ">
          <TransformationCard
            btnText={"explore_our_services"}
            icon={<RiMentalHealthLine></RiMentalHealthLine>}
            text={"Ich biete Mental­therapie für folgende Gebiete:"}
            title={
              "Tauche ein in die Welt der multisensorischen Hypnose und entdecke verborgene Ressourcen aus deinem Unterbewusstsein."
            }
            services={[
              "Mentales Magenband bei emotionalem Essen",
              "Ruhe vor toxischen Menschen",
              "effektives Lernen (und Prüfungsangst)",
              "Liebeskummer",
              "Rauchentwöhnung",
              "mehr Selbstbewusstsein/ Selbstliebe",
              "u.v.m.",
            ]}
          ></TransformationCard>
          <motion.div
            variants={slideFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-h-[48rem]"
          >
            <Image
              src={flowers}
              alt="flowers and candles"
              className="object-cover w-full h-full"
            ></Image>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default forwardRef(Transformation);
