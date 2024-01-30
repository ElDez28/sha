import { motion } from "framer-motion";
import Wrapper from "./Wrapper";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { sectionsAnimationsVariants } from "../animations/animations";
import GradientContainer from "./GradientContainer";

const Quote = () => {
  return (
    <motion.div
      variants={sectionsAnimationsVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Wrapper>
        <div className="flex items-center justify-center relative mx-auto">
          <div className="flex-1 absolute md:left-40 -top-14 md:-top-20 bg-[#f7f7f7] ">
            <BiSolidQuoteAltLeft className="opacity-20 w-[8rem] h-[8rem] md:w-[12rem] md:h-[12rem]"></BiSolidQuoteAltLeft>
          </div>
          <GradientContainer bg={"bg-[#f7f7f7]"}>
            <p className="max-w-[60rem] md:text-6xl mb-12 mt-4 text-2xl mx-auto">
              Alle Träume können wahr werden, wenn wir den Mut. haben, ihnen zu
              folgen.
            </p>
            <p className="italic">Walt Disney</p>
          </GradientContainer>
        </div>
      </Wrapper>
    </motion.div>
  );
};

export default Quote;
