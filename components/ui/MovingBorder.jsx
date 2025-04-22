import React from "react";

const MovingBorder = ({
  children,
  bgColor = "bg-slate-900",
  rounded,
  borderSize = "p-[1.5px]", 
}) => {
  return (
    <div
      className={`relative z-10 cursor-pointer items-center overflow-hidden border border-slate-800 inline-flex ${borderSize} ${rounded}`}
    >
      <div
        className={`animate-rotate absolute inset-0 h-full w-full bg-[conic-gradient(#35edcc_20deg,transparent_120deg)] ${rounded}`}
      ></div>
      <div
        className={`relative z-20 flex items-center justify-center px-2 py-1.5 max-lg:py-0 ${bgColor} ${rounded}`}
      >
        {children}
      </div>
    </div>
  );
};

export default MovingBorder;

