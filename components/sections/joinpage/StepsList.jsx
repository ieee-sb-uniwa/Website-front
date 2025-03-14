import React from 'react'
import { motion } from 'framer-motion'; 
import Step from './Step';
import {fadeIn, staggerContainer, planetVariants} from '@lib/motion.js'

const StepsList = ({steps, imgUrl}) => {
  return (
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className='2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8'
  >
    <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
    >
        <div className="flex flex-col max-w-full gap-[24px]">
        {steps.map((step, index) => (
            <Step
                key={step}
                number={`${index < 10 ? '0' : ''} ${index + 1}`}
                text={step}
            />
        ))}
        </div>
    </motion.div>

  </motion.div>
  )
}

export default StepsList