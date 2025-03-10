import React from 'react';
import { Link } from '@i18n/navigation';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const ArrowIcon = () => (
  <span className="mx-3 text-p7 text-[24px] relative transition-all">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1536 1536">
      <g transform="translate(1536 0) scale(-1 1)">
        <path fill="currentColor" d="M1280 832V704q0-26-19-45t-45-19H714l189-189q19-19 19-45t-19-45l-91-91q-18-18-45-18t-45 18L360 632l-91 91q-18 18-18 45t18 45l91 91l362 362q18 18 45 18t45-18l91-91q18-18 18-45t-18-45L714 896h502q26 0 45-19t19-45m256-64q0 209-103 385.5T1153.5 1433T768 1536t-385.5-103T103 1153.5T0 768t103-385.5T382.5 103T768 0t385.5 103T1433 382.5T1536 768" />
      </g>
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
      <span className="relative flex items-center min-h-[40px] px-6 py-4 overflow-hidden">
      {arrow ? (
        <span className="text relative z-2 base-bold transition-all duration-300 ease-in-out flex ">
          {children}
          <ArrowIcon />
        </span>
        ) : (
        <span className="text relative z-2 transition-all duration-300 ease-in-out flex underline underline-offset-8 decoration-p1 decoration-1 hover:decoration-[3px]">
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


