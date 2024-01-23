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
          <Image className=" mx-auto" src={tea}></Image>
        </motion.div>
        <motion.p
          variants={slideFromRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Die Arbeit mit den Sinnen kann eine Therapie verstärken. So arbeite
          ich zum Beispiel mit Düften, Frequenzen, aber auch Massagen. Die
          Therapie kann klassisch oder auch als Gesprächstherapie erfolgen. Eine
          Gesprächstherapie zeichnet sich dadurch aus, dass wir mit dem
          leistungsstarken Unterbewusstsein schnell nachhaltige Lösungen finden.
          Dies geschieht durch gezielte Kommunikation mittels besonderer
          Werkzeuge und Sprachmuster. Tiefste Wünsche und Ziele können so
          erarbeitet werden.
        </motion.p>
      </div>
    </Wrapper>
  );
};

export default Difference;
