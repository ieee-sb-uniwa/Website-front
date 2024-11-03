import React from "react";

const MovingBorder = ({ children, bgColor = "slate-900" }) => {
  return (
    <div
      className="relative z-10 flex w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 cursor-pointer items-center overflow-hidden rounded-full border border-slate-800 p-[1.5px]"
    >
      <div
        className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#0ea5e9_20deg,transparent_120deg)]"
      ></div>
      <div className={`relative z-20 flex w-full items-center justify-center px-2 sm:px-0.5 sm:py-1.5 rounded-full bg-${bgColor}`}>
        {children}
      </div>
    </div>
  );
};

export default MovingBorder;
