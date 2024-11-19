import Hero from "@components/sections/Hero";
import MapWrapper from "@components/sections/MapWrapper";
import { Sponsors } from "@components/sections/Sponsors";
const Home = () => {
  return (
  <section className='w-full flex-center flex-col'>
    <Hero/>
    <Sponsors/>
    <MapWrapper/>
  </section>
);
};

export default Home;