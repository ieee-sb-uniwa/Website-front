import ClipPath from "./ClipPath";
import Image from "next/image";

const Benefits =  ({ benefits, cardsWidth})  => {
  return (
    <section className="relative">
       <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10" />
       <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10" />
       <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
                <div
                  className={`block relative p-0.5 bg-no-repeat bg-[length:100%_100%] border-[3px] border-[#035b98] rounded-20 bg-[#035b98]/50 hover:bg-[#035b98]`}
                  key={item.id}
                  style={{ maxWidth: `${cardsWidth}rem` }}
                >

              <div className="relative z-2 flex flex-col min-h-[18rem] p-[1.8rem] pointer-events-none">
                <Image
                    src={item.iconUrl}
                    width={58}
                    height={58}
                    alt={item.title}
                    className="mb-5 items-center"
                />
                <h5 className="h6 mb-5 text-p4">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>

              </div>
              <div
                className="absolute inset-0.5 bg-n-8"
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
            </div>
          ))}
        </div>
    </section>
  );
};

export default Benefits;