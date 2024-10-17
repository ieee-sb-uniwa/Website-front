import Hero from "@components/sections/Hero";
import MapWrapper from "@components/MapWrapper";
import { useTranslations } from 'next-intl';

const Home = () => {
  const t = useTranslations('Map');
  return (
  <section className='w-full flex-center flex-col'>
    <Hero/>
    <MapWrapper/>
  </section>
);
};

export default Home;