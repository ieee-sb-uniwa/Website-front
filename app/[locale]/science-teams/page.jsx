
import React from 'react'
import WorkInProgress from "@/components/WorkInProgress";
import {SG} from "@/constants/constants"
import Benefits from "@/components/ui/Benefits"
const Page = () => {
  return (
    <section>
        <div className='container relative z-2 py-28'>
            <div>
                <h3 className='h3 max-md:h5 max-w-640 max-lg:max-w-lg text-p4 mb-7'>Scientific Groups</h3>
                <p className='body-1 max-sm:body-2 max-lg:max-w-lg'></p>
                    
            </div>
            <Benefits benefits={SG} cardsWidth={21}/>
         </div>

    </section>
  );
}

export default Page;