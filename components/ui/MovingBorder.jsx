import React from "react";

const MovingBorder = ({ children, bgColor = "bg-slate-900" }) => {
  return (
    <div
      className="relative z-10 cursor-pointer items-center overflow-hidden rounded-full border border-slate-800 p-[1.5px] inline-flex" // Use inline-flex to size based on content
    >
      <div
        className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#35edcc_20deg,transparent_120deg)]"
      ></div>
      <div className={`relative z-20 flex items-center justify-center px-1.5 py-1.5 rounded-full ${bgColor} min-h-[40px]`}>
        {children}
      </div>
    </div>
  );
};

export default MovingBorder;
