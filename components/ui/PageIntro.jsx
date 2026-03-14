import React from 'react';

const PageIntro = ({url, heading, subheading}) => {
    return(
    <section
      className="bg-cover bg-center bg-no-repeat relative h-[40vh] min-h-[250px]"
      style={{ backgroundImage: `url(${url})` }}
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="container absolute inset-0">
        <h2 className="h2 max-md:h3 text-p4 mt-40 text-shadow">
          {heading}
        </h2>
        <p className="max-lg:body-2 max-sm:body-3 h6 text-p5 mt-9 text-shadow">
          {subheading}
        </p>
      </div>
    </section>
    );
}
export default PageIntro