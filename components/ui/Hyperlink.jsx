import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Hyperlink = ({ href = '#', label = 'Click Here', className = '', arrow = true }) => {
  return (
    <Link
      href={href}
      className={clsx('hyperlink', className)}
      role="button"
    >
      <span className="hyperlink-label">{label}</span>
      {arrow && (
        <svg class="w-4 h-4 ms-2 rtl:rotate-180 hover:translate-x-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      )}
    </Link>
  );
};

Hyperlink.propTypes = {
  href: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  arrow: PropTypes.bool,
};

export default Hyperlink;


