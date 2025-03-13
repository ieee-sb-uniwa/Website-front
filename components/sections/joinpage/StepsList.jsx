import React from 'react'
import { motion } from 'framer-motion'; 
import { joinSBSteps } from '@constants/constants';
import Step from './Step';
import {fadeIn} from '@lib/motion.js'

const StepsList = () => {
  return (
    <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
    >
        <div className="flex flex-col max-w-[600px] gap-[24px]">
        {joinSBSteps.map((step, index) => (
            <Step
                key={step}
                number={`${index < 10 ? '0' : ''} ${index + 1}`}
                text={step}
            />
        ))}
        </div>
    </motion.div>
  )
}

export default StepsList