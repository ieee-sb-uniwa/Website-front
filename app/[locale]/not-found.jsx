import { TbError404 } from "react-icons/tb";
import { TiArrowBack } from "react-icons/ti";
import Button from '@components/ui/Button';
import { useTranslations } from 'next-intl';

export default function NotFound() {
  const notFoundTranslations = useTranslations("NotFoundPage");
  const error404 = useTranslations("Error404");
  return (
    <main className="flex mt-60 mb-10 flex-col items-center justify-center gap-1 mx-4">
      <p className="caption green_gradient">ERROR: 404</p>  
      <h4 className='max-w-640 h3 max-lg:h4 text-p4 mb-4'>{error404('h4')}</h4>
      <p className='max-w-440 mb-14 body-1 max-lg:body-2 max-md:mb-10 text-p5'>{error404('paragraph')}</p>
      <Button href="/" icon={<TiArrowBack size={36} color="white"/>} className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5">
        {notFoundTranslations('button_text')}
      </Button>
    </main>
  );
}