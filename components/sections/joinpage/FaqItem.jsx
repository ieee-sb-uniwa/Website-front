import clsx from "clsx";
import { useState, useRef, useEffect } from "react";

const FaqItem = ({ item, index, showNumbers }) => {
  const [activeId, setActiveId] = useState(null);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);
  
  const active = activeId === item.id;

  useEffect(() => {
    if (active && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [active]);

  return (
    <div className="relative z-2 mb-16">
      <div
        className="group relative flex cursor-pointer items-center justify-between gap-10 px-7"
        onClick={() => {
          setActiveId(activeId === item.id ? null : item.id);
        }}
      >
        <div className="flex-1">
          {showNumbers && (
            <div className="base-bold mb-1.5 text-p6 max-lg:hidden">
              {index < 10 ? "0" : ""}
              {index}
            </div>
          )}
          <div
            className={clsx(
              "h6 text-p4 transition-colors duration-500 max-md:flex max-md:min-h-20 max-md:items-center",
              active && "text-warning",
            )}
          >
            {item.question}
          </div>
        </div>

        <div
          className={clsx(
            "faq-icon relative flex size-12 items-center justify-center rounded-full border-2 border-s2 shadow-400 transition-all duration-500 group-hover:border-p7",
            active && "before:bg-warning after:rotate-0 after:bg-warning",
          )}
        >
          <div className="g2 size-11/12 rounded-full shadow-300" />
        </div>
      </div>

      <div 
        className="overflow-hidden transition-height duration-300 ease-in-out"
        style={{ height: height ? `${height}px` : '0px' }}
      >
        <div ref={contentRef} className="body-2 text-p4 px-7 py-3.5">
          {item.answer}
        </div>
      </div>

      <div
        className={clsx(
          "g2 -bottom-7 -top-7 left-0 right-0 -z-1 rounded-3xl opacity-0 transition-opacity duration-500 absolute",
          active && "opacity-100",
        )}
      >
        <div className="g2 absolute inset-0.5 -z-1 rounded-3xl" />
        <div className="absolute left-8 top-0 h-0.5 w-40 bg-warning" />
      </div>
    </div>
  );
};

export default FaqItem;