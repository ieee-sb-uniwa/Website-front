import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '@lib/motion';

export const TypingTitle = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    initial="hidden"
    animate="show"
    className={`text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);