import React from "react";

const GradientContainer = ({ bg, children }) => {
  return (
    <div className="mx-auto flex items-center justify-center">
      <div className="w-full rounded-3xl bg-gradient-to-r from-blue-400 to-pink-400 p-[4px]">
        <div
          className={`h-full w-full rounded-[calc(1.5rem-4px)] px-8 md:px-24 pb-12 pt-24 text-center ${bg}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default GradientContainer;
