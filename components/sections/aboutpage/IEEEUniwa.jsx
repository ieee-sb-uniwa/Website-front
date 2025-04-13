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
          <h4 className="goals-title grid-title text-p4/80">
            Our Goals
          </h4>

          {/* Right Side: Content Container (Goals Text + Goal Cards) */}
          <section className="grid-goalcontent">
            {/* Goals Text */}
            <p className="body-1 text-pretty text-p4 text-left">
              Our goal is to provide an environment that enhances and develops student participation in the academic community and promotes innovation and the creation of new technological solutions for the world. To achieve this, we organize activities such as:
            </p>

            {/* Goal Cards */}
            <div className="flex flex-wrap gap-6">
              
              <div className="bg-black border-2 border-s5 text-p4 h6 p-6 rounded-lg shadow w-[200px]">Team Projects</div>
              <div className="bg-black border-2 border-s5 text-p4 h6 p-6 rounded-lg shadow w-[200px]">Educational Events</div>
              <div className="bg-black border-2 border-s5 text-p4 h6 p-6 rounded-lg shadow w-[200px]">Competitions</div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default IEEEUniwa;

