import { AiOutlineCloseCircle } from "react-icons/ai";
import ReactPortal from "./ReactPortal";
import { useEffect } from "react";
import { motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
    y: "100vh",
  },
  animate: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.5,
    },
  },
};

const ErrorPopUp = ({ open, handleClose, content }) => {
  useEffect(() => {
    const closeOnEscapeKey = (e) => {
      e.key === "Escape" ? handleClose() : null;
      document.body.addEventListener("keydown", closeOnEscapeKey);
    };
    return () => {
      document.body.addEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);
  if (!open) return null;
  return (
    <ReactPortal wrapperId="error-pop-up">
      <div className="fixed left-0 top-0 z-40 h-screen w-screen bg-neutral-800 opacity-50"></div>
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        className={`fixed inset-x-12 inset-y-0 z-50 mx-auto my-auto box-border h-max min-w-fit max-w-max  py-5`}
      >
        <div className="flex-col items-center justify-center bg-gray-50 pb-4">
          <div className="box-border flex h-full flex-col items-center  justify-center gap-2 overflow-hidden bg-red-400 py-6">
            <AiOutlineCloseCircle
              color="white"
              fontSize={64}
            ></AiOutlineCloseCircle>
          </div>
          <p className="mt-6 py-1 text-center text-2xl font-bold text-gray-600">
            Oooops!
          </p>
          <p className="text-semibold mb-4 px-24 text-center text-gray-600">
            {content}
          </p>
          <button
            className="mx-auto mb-6 flex items-center justify-center bg-gray-600 px-6 py-2 text-sm text-gray-200"
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </motion.div>
    </ReactPortal>
  );
};

export default ErrorPopUp;
