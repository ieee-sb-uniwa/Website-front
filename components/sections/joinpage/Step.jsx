import React from 'react'
const StartSteps = ({ number, text }) => (
  <div className='flex justify-center items-center flex-row'>
    <div
      className='flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-s2 border-2 border-p2'
    >
      <p className="font-bold body-1 text-p1">
        {number}
      </p>
    </div>
    <p className="flex-1 ml-[30px] body-2 text-p5">
      {text}
    </p>
  </div>
);

export default StartSteps;