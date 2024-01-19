"use client";

import { useCallback, useState, useEffect } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import dynamic from "next/dynamic";
const DynamicModal = dynamic(() => import("./Modal"), { ssr: false });
// import logo from "../../public/logo/resized-logo-black-copy.webp";
// import logo2 from "../../public/logo/resized-logo-whitea-copy.webp";
// import logo3 from "../../public/logo/tech_towers_logo3.webp";
import { useInView } from "react-intersection-observer";

const Navbar = () => {
  const [bg, setBg] = useState("transparent");
  const url = process.env.NEXT_PUBLIC_SITE_URL;
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);
  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);
  const { ref, entry } = useInView({
    threshold: 0.9,
  });
  useEffect(() => {
    if (entry?.isIntersecting || entry === undefined) {
      setBg("transparent");
    } else {
      setBg("white");
    }
  }, [entry]);

  return (
    <>
      <DynamicModal isOpen={isOpen} handleClose={closeModal}></DynamicModal>

      <nav
        className={`${
          bg === "white"
            ? "bg-[#f7f7f7] shadow-lg transition-shadow  "
            : "bg-transparent"
        } fixed z-30 w-full transition-colors duration-300 `}
      >
        <div className="mx-auto flex max-w-[90rem] items-center justify-between px-4 pb-1 pt-2 font-bold lg:px-8 ">
          <Link href="/" className={`-translate-y-1`}>
            {/* <Image
              className={`hidden w-48 object-contain lg:inline-block`}
              // src={bg === "white" ? logo : logo2}
              alt="logo with text"
            ></Image> */}
            {/* <Image
              priority
              className="h-12 w-12 object-contain  lg:hidden"
              src={logo3}
              alt="logo without text"
            ></Image> */}
          </Link>
          <div
            className={` hidden  items-center gap-8  py-3 text-base font-semibold lg:flex   text-${
              bg === "white" ? "gray-700" : "white"
            }`}
          >
            <div className="group relative flex items-center justify-center gap-1 whitespace-nowrap">
              <Link className="z-20" href={`${url}`}>
                {"Home"}
              </Link>
            </div>
            <div className="group relative flex items-center justify-center gap-1 whitespace-nowrap">
              <Link className="z-20" href={`${url}/about`}>
                {"About Us"}
              </Link>
            </div>
            <div className="group relative flex items-center justify-center gap-1 ">
              <Link className="z-20" href={`${url}/services`}>
                {"Services"}
              </Link>
            </div>
            <div className="flex items-center justify-center gap-1">
              <Link href={`${url}/careers`}> {"Careers"}</Link>
            </div>
            <div className="flex items-center justify-center whitespace-nowrap rounded-full bg-primary px-6 py-2 font-semibold  text-white">
              <Link href={`${url}/contact_us`}> {"Contact Us"}</Link>
            </div>
          </div>
          {!isOpen && (
            <div
              onClick={openModal}
              className={`block cursor-pointer lg:hidden`}
            >
              <GiHamburgerMenu
                className={`${
                  bg === "white" ? "text-primary " : "text-white"
                } text-2xl `}
              ></GiHamburgerMenu>
            </div>
          )}
        </div>
      </nav>
      <div ref={ref} className="absolute top-0  w-full">
        <div className="h-[30vh] w-full "></div>
      </div>
    </>
  );
};

export default Navbar;