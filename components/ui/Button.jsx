import React from 'react'
import clsx from 'clsx';
import Image from 'next/image';

const Button = ({icon, iconWidth, iconHeight, children, href, containerClassName, onClick}) => {
  const Inner = () => (
    <>
        <span className='relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden'>
            {icon && (
                <Image
                    src={icon}
                    width={iconWidth}
                    height={iconHeight}
                    alt="circle"
                    className="mr-5 object-contain z-10"
                />
            )}
            <span className='relative z-2 font-poppins base-bold text-p1 uppercase'>{children}</span>
        </span>
        <span className='glow-before glow-after' />
    </>
  );
  return href ? (
    <a
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName,
      )}
      href={href}
    >
      <Inner />
    </a>
  ) : (
    <button
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName,
      )}
      onClick={onClick}
    >
      <Inner />
    </button>
  );
};
export default Button;
