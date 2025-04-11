import React from 'react';

const IEEEUniwa = () => {
  return (
    <section className="py-10">
      <div className="container">
        <h3 className="h3 text-center green_gradient mb-12">
          IEEE UniWA Student Branch
        </h3>

        <div className="hidden lg:ieee-uniwa-grid">
          {/* Left Side: Vertical Title */}
          <h4 className="goals-title grid-title text-p4">
            Our Goals
          </h4>

          {/* Right Side: Content Container (Goals Text + Goal Cards) */}
          <section className="grid-goalcontent">
            {/* Goals Text */}
            <p className="body-2 text-pretty text-left">
              Our goal is to provide an environment that enhances and develops student participation in the academic community and promotes innovation and the creation of new technological solutions for the world. To achieve this, we organize activities such as:
            </p>

            {/* Goal Cards */}
            <div className="flex flex-wrap gap-6">
              
              <div className="bg-white p-6 rounded-lg shadow w-[200px]">Goal Card 1</div>
              <div className="bg-white p-6 rounded-lg shadow w-[200px]">Goal Card 2</div>
              <div className="bg-white p-6 rounded-lg shadow w-[200px]">Goal Card 3</div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default IEEEUniwa;

