import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { pagesActions } from "@/store/store";

const HeroSection = (props) => {
  const state = useSelector((state) => state.pages);
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded === true && state[props.page] === false) {
      dispatch(pagesActions.setCached(props.page));
    }
  }, [loaded]);

  const onLoad = () => {
    setLoaded(true);
  };

  return (
    <section
      className={`relative flex-1 min-h-[60vh] flex items-center justify-center ${
        props.main ? "" : "md:max-h-[60vh]"
      }`}
    >
      <div className="absolute left-0 top-0 -z-30 h-full w-full flex items-center justify-center"></div>
      <div
        className={`duration-600 absolute left-0  top-0 -z-10 h-full w-full backdrop-blur-xl transition-all ${
          state[props.page] ? "opacity-0" : ""
        }`}
      ></div>

      <div
        className={`duration-600 h-full w-full transition-all bg-primary ${
          state[props.page] ? "opacity-80" : ""
        } absolute top-0 -z-20`}
      ></div>

      {props.children}
    </section>
  );
};

export default HeroSection;
