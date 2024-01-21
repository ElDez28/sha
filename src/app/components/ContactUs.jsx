"use client";

import { useState, useEffect } from "react";
import Header from "./Header";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import emailSchema from "@/schemas/emailSchema";
import { sendContactForm } from "../lib/sendEmail";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { paragraphFontSize } from "../lib/fontSizes";
import { FaPhoneAlt } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneIncoming } from "react-icons/fi";
import Image from "next/image";
import contact from "/public/contact.svg";

const variants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,

    transition: {
      type: "tween",
      duration: 1,
      delay: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      type: "tween",
      duration: 1,
    },
  },
};

const ContactUs = ({ t, con }) => {
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [validate, setValidate] = useState(false);
  const router = useRouter();
  const page =
    router.pathname === "/"
      ? "Home Page"
      : router.pathname === "/privacy_and_policy"
      ? "Privacy and Policy Page"
      : router.pathname === "/terms_and_conditions"
      ? "Terms and Conditions Page"
      : router.pathname === "/legal_notice"
      ? "Legal Notice page"
      : router.pathname === "/about"
      ? "About Page"
      : "";
  useEffect(() => {
    if (error) {
      setOpen(true);
    }
  }, [error]);
  useEffect(() => {
    if (success) {
      const timeout = setTimeout(() => {
        setSuccess(false);
      }, 5000);

      () => {
        clearTimeout(timeout);
      };
    }
  }, [success]);

  return (
    <section className={`relative flex-1  bg-[#edf2f5] py-24`}>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className=" z-10 mx-auto max-w-[90rem] px-4 text-center lg:px-8"
      >
        <Header title={con ? "Send Email" : "Contact Us"}></Header>
        <p className="mb-12 font-bold italic  text-gray-500">
          {con ? "" : "Contact SHA"}
        </p>
        <div className="flex flex-col items-center gap-8 lg:flex-row">
          <div className="relative flex-1">
            <Image src={contact}></Image>
          </div>
          <div className="flex flex-col flex-1 items-center text-center">
            <FaPhoneAlt className="text-6xl text-primary mb-6"></FaPhoneAlt>
            <h4 className="text-xl font-bold text-gray-500 mb-12">
              Talk to SHA
            </h4>
            <p className="mb-8">
              Interessiert an Sha-Mentaltherapie. Greifen Sie einfach zum
              Telefon, um mit einem Mitglied unseres Teams zu sprechen.
            </p>
            <span className="text-primary font-bold text-2xl mb-8">
              0176- 766 49 854{" "}
            </span>
            <div className="flex gap-4 opacity-50">
              <FiPhoneIncoming className="text-primary text-4xl"></FiPhoneIncoming>
              <FaTelegram className="text-primary text-4xl"></FaTelegram>
              <FaWhatsapp className="text-primary text-4xl"></FaWhatsapp>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
