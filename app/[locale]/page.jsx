import Hero from "@components/sections/Hero";
import MapWrapper from "@components/sections/MapWrapper";

const Home = () => {
  return (
  <section className='w-full flex-center flex-col'>
    <Hero/>
    <MapWrapper/>
  </section>
);
};

export default Home;