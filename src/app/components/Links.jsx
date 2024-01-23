import Link from "next/link";
import Image from "next/image";
import { linksFs, miniTitleFs } from "../lib/fontSizes";
import { HiHome } from "react-icons/hi";
import { MdPrivacyTip } from "react-icons/md";
import { GiInjustice } from "react-icons/gi";
import logo from "/public/logo.png";

const Links = () => {
  return (
    <section className="h-auto bg-dark pt-16">
      <div className="] mx-auto max-w-[90rem]  px-4 pb-16 text-left md:text-center lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 lg:grid-cols-4 ">
          <div className="text-md flex flex-col gap-2 text-left text-gray-200 lg:col-span-2">
            <div className="mx-auto md:mx-0">
              <Image
                className="w-[16rem] h-[16rem]"
                src={logo}
                alt="sha logo"
              ></Image>
            </div>
          </div>
          <div className="flex w-full flex-1 flex-col gap-2 text-gray-200">
            <h2 className={` pb-2 ${miniTitleFs}  text-left`}>
              {"Nützliche Links"}
            </h2>
            <ul className="">
              <li className="flex items-center gap-2 py-2 transition-all duration-300 hover:text-primary">
                <HiHome className=""></HiHome>
                <Link className={` ${linksFs}`} href={"/"}>
                  {"Startseite"}
                </Link>
              </li>
              <li className="flex items-center gap-2 py-2 transition-all duration-300 hover:text-primary">
                <MdPrivacyTip></MdPrivacyTip>
                <Link className={`${linksFs}`} href={`/privacy_and_policy`}>
                  {"Datenschutz & Richtlinien"}
                </Link>
              </li>
              <li className="flex items-center gap-2 py-2  transition-all duration-300 hover:text-primary">
                <GiInjustice></GiInjustice>
                <Link className={`${linksFs}`} href={`/legal_notice`}>
                  {"Impressum"}
                </Link>
              </li>
            </ul>
          </div>
          <div
            className={`flex w-full flex-1 flex-col  gap-2 text-left text-gray-200 ${linksFs}`}
          >
            <div className="flex flex-col gap-2">
              <h2 className={`pb-2 text-left ${miniTitleFs}`}>
                {"Kontaktiere uns"}
              </h2>

              <p>
                <span className="font-semibold">
                  SHA Mental Therapie & mehr{" "}
                </span>
              </p>
              <span>Tempelhofer Damm 36</span>
              <p>
                <span className="font-semibold">12101 </span>
                Berlin
              </p>
              <span className="font-bold">Deutschland</span>
              <p className="">
                <span className="font-bold">{"phone"}:</span>{" "}
                <a
                  className="py-6 text-hcolor hover:text-lightblue md:p-0 md:py-0"
                  href={`tel:${+49017676649854}`}
                >
                  +49 0176 766 49 854
                </a>
              </p>
              <p>
                <span className="font-bold">{"email"}: </span>
                <a className="py-6 md:py-0" href={`mailto:shahda@hotmail.de`}>
                  shahda@hotmail.de
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`bg-dark px-4 py-6 text-center text-gray-200 ${linksFs}`}>
        <span>© {"copyright "}</span>
        <span>SHA 2024. All rights reserved</span>
      </div>
    </section>
  );
};

export default Links;
