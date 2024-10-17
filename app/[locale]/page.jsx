import Hero from "@components/sections/Hero";
import MapWrapper from "@components/sections/MapWrapper";
import Council from "@components/sections/Council";
import { useTranslations } from 'next-intl';

const Home = () => {
  const t = useTranslations('Map');
  return (
  <section className='w-full flex-center flex-col'>
    <Hero/>
    <Council/>
    <MapWrapper/>
  </section>
);
};

export default Home;