import { paragraphFontSize, titleFontSize } from "../lib/fontSizes";
import { motion } from "framer-motion";
import { slideFromLeft } from "../animations/animations";

const TransformationCard = (props) => {
  return (
    <motion.div
      variants={slideFromLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-xl px-12 py-12 shadow-lg "
    >
      <div className="absolute right-0 top-0 -z-10 h-0 w-0 bg-primary opacity-0 transition-all duration-300 group-hover:h-full group-hover:w-full group-hover:opacity-100"></div>
      <div className="mb-12 text-4xl text-primary transition-colors duration-700 group-hover:text-white 2xl:text-6xl ">
        {props.icon}
      </div>
      <div className=" flex flex-1 flex-col gap-6 text-left text-gray-800 transition-colors duration-700 group-hover:text-white  ">
        <h3 className={`${titleFontSize} font-bold leading-6 2xl:leading-7 `}>
          {props.title}
        </h3>
        <p className={`leading-relaxed ${paragraphFontSize}`}>{props.text}</p>
        <ul className="list-disc">
          {props.services.map((item, i) => {
            return (
              <li className="mb-4" key={i}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
};

export default TransformationCard;
