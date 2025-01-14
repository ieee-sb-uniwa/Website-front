import React from 'react';
import { Link } from '@i18n/routing';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Hyperlink = ({ href = '#', children, className = '', arrow = true }) => {
  return (
    <Link
      href={href}
      className={clsx('', className)}
      role="button"
    >
      <span className='relative transition-transform duration-200 flex items-center min-h-[60px] px-4 inner-before overflow-hidden'>
        <span className='relative z-2 base-bold'>{children}</span>
        {arrow && (
          <span className="ml-2 flex items-center transition-transform duration-200 group-hover:translate-x-2">
            <svg class="w-4 h-4 ms-2 rtl:rotate-180 hover:translate-x-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
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


