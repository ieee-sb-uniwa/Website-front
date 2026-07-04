import ClipPath from "./ClipPath";
import Image from "next/image";
import clsx from 'clsx';
import { Link } from '@i18n/navigation';
import Hyperlink from '@components/ui/Hyperlink'

const ArrowIndicator = () => (
  <span
    aria-hidden
    className="ml-auto font-bold uppercase text-p4 tracking-wider"
  >
  <span className="mx-3 text-p7 text-[24px] relative transition-all">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1536 1536">
      <g transform="translate(1536 0) scale(-1 1)">
        <path fill="currentColor" d="M1280 832V704q0-26-19-45t-45-19H714l189-189q19-19 19-45t-19-45l-91-91q-18-18-45-18t-45 18L360 632l-91 91q-18 18-18 45t18 45l91 91l362 362q18 18 45 18t45-18l91-91q18-18 18-45t-18-45L714 896h502q26 0 45-19t19-45m256-64q0 209-103 385.5T1153.5 1433T768 1536t-385.5-103T103 1153.5T0 768t103-385.5T382.5 103T768 0t385.5 103T1433 382.5T1536 768" />
      </g>
    </svg>
  </span>
  </span>
);

const Benefits = ({ benefits, cardsWidth }) => {
  return (
    <section className="relative">
      <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10" />
      <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10" />
      <div className="flex flex-wrap gap-10 mb-10">
        {benefits.map((item) => {

          const color = item.color || "ieee";
          
          return (
            <div
              className={`block relative p-0.5 bg-no-repeat bg-[length:100%_100%] border-[3px] border-${color} rounded-20 bg-${color}/25 hover:bg-${color}/75 transition-colors duration-300`}
              key={item.id}
              style={{ maxWidth: `${cardsWidth}rem` }}
            >
            <Link
              key={item.id}
              href={item.href}
            >
              <div className="relative flex flex-col min-h-[18rem] p-[1.8rem] ">
               <div className={`flex items-center gap-6 border-b-[2px] mb-4 border-${color}`}>
                <Image
                  src={item.iconUrl}
                  width={58}
                  height={58}
                  alt={item.title}
                  className="mb-5 items-center"
                />
                  <ArrowIndicator />
    

                </div>
                <h5 className="h6 mb-5 text-p4">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
              </div>
              <div
                className="absolute z-1 inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <Image
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
              <ClipPath />
            </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Benefits;