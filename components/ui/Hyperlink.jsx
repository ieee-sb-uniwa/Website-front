import React from 'react';
import { Link } from '@i18n/routing';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const ArrowIcon = () => (
  <span className="ml-2 text-[24px] relative transition-all">
    <svg
      className="w-4 h-4"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 10"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 5h12m0 0L9 1m4 4L9 9"
      />
    </svg>
  </span>
);

const Hyperlink = ({ href = '#', children, className = '', arrow = true }) => {
  return (
    <Link
      href={href}
      className={clsx('', className)} 
      role="button"
    >
      <span className="relative flex items-center min-h-[40px] px-4 overflow-hidden">
      {arrow ? (
        <span className="text relative z-2 base-bold transition-all duration-300 ease-in-out flex ">
          {children}
          <ArrowIcon />
        </span>
        ) : (
        <span className="text relative z-2 transition-all duration-300 ease-in-out flex underline md:underline-offset-4 underline-offset-8 decoration-p1 decoration-1 hover:decoration-[3px]">
          {children}
        </span>
        )}
      </span>
    </Link>
  );
};

Hyperlink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  arrow: PropTypes.bool,
};

export default Hyperlink;


