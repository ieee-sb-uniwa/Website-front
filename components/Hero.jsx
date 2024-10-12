import React from 'react';

export const Hero = () => {
  return (
    <section
      className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32"
      style={{
        backgroundImage: "url('/assets/photos/IEEEXTREME_2023.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        maskImage: 'linear-gradient(to top, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%)',
        WebkitMaskImage: 'linear-gradient(to top, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%)',
      }}
    >
      <div className="container">
        <div className="relative z-2 max-w-512 max-lg:max-w-388">
          <div className="orange_gradient text-p4 small-2 caption uppercase">
            NON PROFIT ORGANISATION | TECH & SCIENCE
          </div>
          <h1 className="milky_way text-border mb-6 title uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-6xl max-md:leading-12 ">
            IEEE UNIWA
          </h1>
          <p className="text-shadow max-w-440 mb-14 h6 max-lg:body-1 max-md:mb-10 text-p4">
            We are simply amazing people advancing technology with the support of IEEE
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
