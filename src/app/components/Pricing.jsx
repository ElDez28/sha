import Image from "next/image";
import Wrapper from "./Wrapper";
import { LuEuro } from "react-icons/lu";
import Header from "./Header";
import doctor from "/public/doctor.png";
import weight from "/public/lose-weight.png";

const Card = ({ title, price, icon, alt, full = true }) => {
  return (
    <div className="p-[4px] bg-gradient-to-r from-[#1e749e] rounded-xl overflow-hidden  to-[#1b688e]">
      <div
        className={`rounded-xl p-10 ${
          full ? "bg-gradient-to-r from-[#1e749e] to-[#1b688e]" : "bg-[#f7f7f7]"
        }`}
      >
        <div
          className={`flex flex-col items-center max-w-64 mx-auto ${
            full ? "text-gray-200" : "text-gray-700"
          }`}
        >
          <Image src={icon} alt={alt}></Image>
          <h2 className="font-bold text-2xl mb-6">{title}</h2>
          <div className="flex items-center">
            <h2
              className={`font-bold text-6xl ${
                full ? "text-gray-200" : "text-[#1e749e]"
              }`}
            >
              {price}
            </h2>
            <LuEuro className="text-4xl mt-6"></LuEuro>
            <span className="mt-8">/sitzung</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Pricing = () => {
  return (
    <Wrapper>
      <Header title={"PREISLISTE"}></Header>
      <div className="grid grid-cols-1 md:grid-cols-2 content-center gap-16 mt-20">
        <Card
          icon={doctor}
          full={false}
          title="Gesprächs&shy;hypnose mit Thema nach Wahl"
          price="99"
        ></Card>
        <Card title="Magenband Behandlung" price="299" icon={weight}></Card>
      </div>
      <p className="mt-12 font-bold text-gray-600">
        Bitte scheue Dich nicht nach Kennenlernangeboten oder Sonderpreise für
        Schüler, Azubis, Studenten oder bei geringem Einkommen zu erfragen!
      </p>
    </Wrapper>
  );
};

export default Pricing;
