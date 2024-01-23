import Header from "./Header";
import { motion } from "framer-motion";
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

const ContactUs = () => {
  return (
    <section
      id="contact_us"
      className={`relative flex-1 scroll-m-24 bg-[#edf2f5] py-24`}
    >
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className=" z-10 mx-auto max-w-[90rem] px-4 text-center lg:px-8"
      >
        <Header title={"Kontaktiere uns"}></Header>
        <p className="mb-12 font-bold italic  text-gray-500">
          {"Kontaktiere SHA"}
        </p>
        <div className="flex flex-col items-center gap-8 lg:flex-row">
          <div className="relative flex-1">
            <Image src={contact}></Image>
          </div>
          <div className="flex flex-col flex-1 items-center text-center">
            <FaPhoneAlt className="text-6xl text-primary mb-6"></FaPhoneAlt>
            <h4 className="text-xl font-bold text-gray-500 mb-12">
              Sprechen mit SHA
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
