import React from 'react';
import clsx from 'clsx';

const PageIntro = ({
  heading,
  subheading,
  bgImage,
  overlay = 'bg-black/30',
}) => {
  return (
    <section
      className={"relative mb-10 bg-cover bg-center bg-no-repeat h-[35vh] min-h-[250px]"}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className={clsx("absolute inset-0", overlay)} />

      {/* Content */}
      <div className="container absolute inset-0 flex flex-col justify-end pb-10">
        {heading && (
          <h2 className='h2 max-md:h3 text-p4 mt-40 text-shadow'>
            {heading}
          </h2>
        )}
        {subheading && (
          <p className='max-lg:body-2 max-sm:body-3 h6 text-p5 mt-9 text-shadow'>
            {subheading}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageIntro;
