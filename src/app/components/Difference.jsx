import Header from "./Header";
import { motion } from "framer-motion";
import Wrapper from "./Wrapper";
import tea from "/public/tea.webp";
import Image from "next/image";
import {
  sectionsAnimationsVariants,
  slideFromLeft,
  slideFromRight,
} from "../animations/animations";

const Difference = () => {
  return (
    <Wrapper>
      <Header title="DIE FEINHEITEN"></Header>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center mt-12">
        <motion.div
          variants={slideFromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Image className=" mx-auto" src={tea} alt="tea cup"></Image>
        </motion.div>
        <motion.p
          className="flex flex-col gap-4 text-center md:text-left"
          variants={slideFromRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span>
            Meine Arbeit zeichnet sich durch multisensorische Elemente aus. Die
            Arbeit mit den Sinnen kann die Wirkung verstärken. So arbeite ich z.
            B. mit Düften, Frequenzen aber auch Massagen.
          </span>
          <span>
            In der Gesprächshypnose wird das Unterbewusstsein gezielt
            angesprochen. Dies mit der Intention, Ängste und Blockaden,
            emotionale Verletzungen und negative Glaubenssätze abzubauen.
          </span>
          <span>
            Meine Arbeit zeichnet sich durch multisensorische Elemente aus. Die
            Eine Gesprächshypnose zeichnet sich dadurch aus, dass wir mit dem
            leistungsstarken Unterbewusstsein - schnell eine nachhaltige Lösung
            zu Ihrem Problem finden. Dies geschieht durch gezielte Kommunikation
            mittels besonderer Werkzeuge und Sprachmuster. Tiefste Wünsche und
            Ziele können so erarbeitet werden.
          </span>
        </motion.p>
      </div>
    </Wrapper>
  );
};

export default Difference;
