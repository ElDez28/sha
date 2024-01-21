import Link from "next/link";
import Image from "next/image";
import { linksFs, miniTitleFs } from "../lib/fontSizes";
import { HiHome } from "react-icons/hi";
import { MdPrivacyTip } from "react-icons/md";
import { GiInjustice } from "react-icons/gi";
import { GiStabbedNote } from "react-icons/gi";

const Links = ({ t }) => {
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/`;
  return (
    <section className="h-auto bg-dark pt-16 ">
      <div className="] mx-auto max-w-[90rem]  px-4 pb-16 text-left md:text-center lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 lg:grid-cols-4 ">
          <div className="text-md flex flex-col gap-2 text-left text-gray-200 lg:col-span-2">
            <div>
              {/* <Image
                className="h-[40px] w-[140px]"
                src={logo}
                alt="tech towers logo"
              ></Image> */}
            </div>
            <p className={`text-sm`}>{"Footer"}</p>
          </div>
          <div className="flex w-full flex-1 flex-col gap-2 text-gray-200">
            <h2 className={` pb-2 ${miniTitleFs}  text-left`}>
              {"Useful links"}
            </h2>
            <ul className="">
              <li className="flex items-center gap-2 py-2 transition-all duration-300 hover:text-primary">
                <HiHome className=""></HiHome>
                <Link className={` ${linksFs}`} href={url}>
                  {"Home"}
                </Link>
              </li>
              <li className="flex items-center gap-2 py-2 transition-all duration-300 hover:text-primary">
                <MdPrivacyTip></MdPrivacyTip>
                <Link
                  className={`${linksFs}`}
                  href={`${url}/privacy_and_policy`}
                >
                  {"Privacy&Policy"}
                </Link>
              </li>
              <li className="flex items-center gap-2 py-2 text-gray-50 transition-all duration-300 hover:text-primary">
                <GiStabbedNote></GiStabbedNote>
                <Link
                  className={`text-sm  ${linksFs}`}
                  href={`${url}/terms_and_conditions`}
                >
                  {"Terms&Conditions"}
                </Link>
              </li>
              <li className="flex items-center gap-2 py-2  transition-all duration-300 hover:text-primary">
                <GiInjustice></GiInjustice>
                <Link className={`${linksFs}`} href={`${url}/legal_notice`}>
                  {"Legal Notice"}
                </Link>
              </li>
            </ul>
          </div>
          <div
            className={`flex w-full flex-1 flex-col  gap-2 text-left text-gray-200 ${linksFs}`}
          >
            <div className="flex flex-col gap-2">
              <h2 className={`   pb-2 text-left ${miniTitleFs}`}>
                {"Contact Us"}
              </h2>

              <p>
                <span className="font-semibold">Tech Towers </span>
                d.o.o Prijedor
              </p>
              <span>Petrovo b.b</span>
              <p>
                <span className="font-semibold">79102 </span>
                Prijedor
              </p>
              <span className="font-bold">Bosnia and Herzegovina</span>
              <p className="">
                <span className="font-bold">{"phone"}:</span>{" "}
                <a
                  className="py-6 text-hcolor hover:text-lightblue md:p-0"
                  href={`tel:${+38766994466}`}
                >
                  +38766994466
                </a>
              </p>
              <p className="">
                <span className="font-bold">{"phone"}:</span>{" "}
                <a
                  className="py-6 text-hcolor hover:text-lightblue md:p-0 md:py-0"
                  href={`tel:${+4917680190786}`}
                >
                  +4917680190786
                </a>
              </p>
              <p>
                <span className="font-bold">{"email"}: </span>
                <a className="py-6 md:py-0" href={`mailto:info@techtowers.com`}>
                  info@tech-towers.net
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`bg-dark px-4 py-6 text-center text-gray-200 ${linksFs}`}>
        <span>© {"copyright"}</span>
      </div>
    </section>
  );
};

export default Links;
