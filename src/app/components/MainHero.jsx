"use client";

import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import Sha from "./Sha";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import mountain from "/public/heroImages/mountain.webp";
import butterfly from "/public/heroImages/butterfly.webp";
import flower from "/public/heroImages/flower.webp";
import flower_2 from "/public/heroImages/flower_2.webp";
import cat from "/public/heroImages/cat.webp";

const responsive = {
  large: {
    breakpoint: {
      max: 5000,
      min: 3000,
    },
    items: 1,
    partialVisibilityGutter: 40,
  },
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1280,
    },
    items: 1,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: {
      max: 640,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {
      max: 1280,
      min: 640,
    },
    items: 1,
    partialVisibilityGutter: 30,
  },
};

const variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.5,
    },
  },
};
const variantsTwo = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.3,
      duration: 0.7,
    },
  },
};
const variantsThree = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.5,
      duration: 0.7,
    },
  },
};
const variantsFour = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.7,
      duration: 0.7,
    },
  },
};

const SlideItem = ({ image, alt }) => {
  return (
    <div className="h-full w-full">
      <Image
        objectFit="cover"
        src={image}
        alt={alt}
        className="object-cover max-h-full max-w-full min-h-[100vh] min-w-[100vw]"
      ></Image>
    </div>
  );
};

const MainHero = (props) => {
  return (
    <HeroSection page="home" main>
      <div className="w-[100vw] h-[100vh] absolute z-0">
        <Carousel
          className="w-full h-full"
          autoPlay={true}
          additionalTransfrom={0}
          arrows={false}
          ssr
          autoPlaySpeed={6000}
          centerMode={false}
          containerClass="carousel-container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover={false}
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={true}
          showDots={false}
          renderDotsOutside={false}
          responsive={responsive}
          rewind={true}
          rewindWithAnimation={true}
          rtl={false}
          shouldResetAutoplay
          sliderClass=""
          slidesToSlide={1}
          swipeable
          transitionDuration={0}
        >
          <SlideItem image={mountain} alt={"mountain"}></SlideItem>
          <SlideItem image={cat} alt={"cat"}></SlideItem>
          <SlideItem image={flower} alt={"flower"}></SlideItem>
          <SlideItem image={flower_2} alt={"flower_2"}></SlideItem>
          <SlideItem image={butterfly} alt={"butterfly"}></SlideItem>
        </Carousel>
      </div>

      <div className="hero relative h-screen overflow-hidden md:h-full bg-gray-700 w-full bg-opacity-60">
        <Sha></Sha>
        <div className="mx-auto flex h-full max-w-[96rem] items-center justify-between gap-4 px-6">
          <div className="order-last mt-20 flex h-full flex-1 flex-col items-center justify-center px-4 text-center text-white xl:order-first">
            <motion.div
              variants={variants}
              initial="initial"
              animate="animate"
              className={`font-bold tracking-wider text-3xl md:text-5xl`}
            >
              <h1 className="leading-snug">
                HERZLICH WILL&shy;KOMMEN BEI <br />
                SHA MENTAL&shy;THERAPIE & MEHR
              </h1>
            </motion.div>
            <motion.h2
              variants={variantsTwo}
              initial="initial"
              animate="animate"
              className=" text-lg font-medium tracking-wider md:text-xl lg:text-2xl"
            ></motion.h2>
            <motion.h2
              variants={variantsThree}
              initial="initial"
              animate="animate"
              className="mb-6  text-lg font-medium tracking-wider md:text-xl lg:text-2xl"
            ></motion.h2>
            <motion.button
              onClick={props.onClick}
              variants={variantsFour}
              initial="initial"
              animate="animate"
              className=" rounded-full border-2 border-white px-4 py-2 text-base font-semibold  "
            >
              Learn more
            </motion.button>
          </div>
        </div>
      </div>
    </HeroSection>
  );
};

export default MainHero;
