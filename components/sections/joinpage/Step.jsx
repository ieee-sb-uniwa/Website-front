import React from 'react'
const StartSteps = ({ number, text }) => (
  <div className='flex justify-center items-center flex-row'>
    <div
      className='flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-s2 border-2 border-s4'
    >
      <p className="font-bold body-1 max-md:body-2 text-warning">
        {number}
      </p>
    </div>
    <p className="flex-1 ml-[30px] body-1 max-md:body-2 text-p5">
      {text}
    </p>
  </div>
);

export default StartSteps;