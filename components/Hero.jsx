import React from 'react';

export const Hero = () => {
  return (
    <section
      className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32"
      style={{
        backgroundImage: "url('/assets/photos/IEEEXTREME_COMPETITION.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'sb_office',
      }}
    >
      <div className="container">
        <div className="relative z-2 max-w-512 max-lg:max-w-388">
          <div className="blue_gradient caption uppercase">
            NON PROFIT ORGANISATION | TECH & SCIENCE
          </div>
          <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
            IEEE UNIWA
          </h1>
          <p className="max-w-440 mb-14 body-1 max-md:mb-10 text-p4">
            We are simply amazing people advancing technology with the support of IEEE
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
