import React from 'react';
import clsx from 'clsx';

const ToggleButton = ({ leftText, rightText, state, setState }) => {
  return (
    <div className='relative z-4 mx-auto flex w-[375px] rounded-3xl border-[3px] border-s4/25 bg-s1/50 p-2 backdrop-blur-[6px] max-md:w-310px'>
      <button
        className={clsx("toggle_btn", "text-xl",state && "text-p3")}
        onClick={() => setState(true)}
      >
        {leftText}
      </button>
      <button
        className={clsx("toggle_btn", !state && "text-p3")}
        onClick={() => setState(false)}
      >
        {rightText}
      </button>
      <div
        className={clsx(
          "g4 rounded-14 before:h-100 toggle_btn_before absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] overflow-hidden shadow-400 transition-transform duration-500",
          !state && 'translate-x-full'
        )}
      />
    </div>
  );
};

export default ToggleButton;
