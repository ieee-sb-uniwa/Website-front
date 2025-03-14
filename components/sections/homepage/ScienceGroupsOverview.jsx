import React from 'react'
import { scientificGroupsLogos } from "@/constants/constants.js";
import { FocusCards } from "@/components/ui/FocusCards";

const ScienceGroupsOverview = () => {
  return (
    <section className="g2 overflow-clip bg-[url('/assets/images/text-slice-pattern.png')] bg-cover bg-center bg-no-repeat">
      <section className="mx-auto w-full max-w-7xl p-4 text-center">
          <div className="mx-auto w-full max-w-7xl px-4 relative py-10 text-center md:py-20">        
              <header className='my-10 md:my-20'>
                  <p className='caption orange_gradient mb-5 mx-md:mb-2.5 '>Create.collaborate.lead</p>
                  <h3 className='h3 max-md:h5 text-s2 my-10'>
                      Explore our Scientific Groups
                  </h3>
                  <p className='my-10 h6 max-lg:body-2 text-s1'>Love tech? So do we. For that reason we established groups that cover various scientific domains we have passion for. 
                    We have the tools and equipment but we need YOU to create solutions and impactful projects.
                </p>
              </header>
              <FocusCards cards={scientificGroupsLogos}/>
          </div>
      </section>
    </section>
  )
}

export default ScienceGroupsOverview