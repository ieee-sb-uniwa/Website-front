"use client"; // Declare the component as a client-side component
import {useTranslations} from 'next-intl';
import { useEffect, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";  // Import Next.js Link component

export const Nav = () => {
  const t = useTranslations('Nav');
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4",
        hasScrolled && "py-2 bg-black-100 backdrop-blur-[8px]",
      )}
    >
      <div className="container flex h-13 items-center max-lg:px-5">
        <Link href="/" className="lg:hidden flex-1 cursor-pointer z-2">
          <Image src="/assets/logos/sblogo.png" width={90} height={55} alt="logo" />
        </Link>

        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none",
          )}
        >
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <Link href="/about" className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5">
                    {t('about')}
                  </Link>
                  <div className="dot" />
                  <Link href="/news" className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5">
                    {t('news')}
                  </Link>
                  <div className="dot" />
                  <Link href="/teams" className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5">
                    {t('teams')}
                  </Link>
                </li>

                <li className="nav-logo">
                  <Link href="/" className={clsx("max-lg:hidden transition-transform duration-500 cursor-pointer")}>
                    <Image
                      src="/assets/logos/Full Blue and White Icon.png"
                      width={150}
                      height={150}
                      alt="logo"
                    />
                  </Link>
                </li>

                <li className="nav-li">
                  <Link href="/events" className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5">
                    {t('events')}
                  </Link>
                  <div className="dot" />
                  <Link href="/contact" className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5">
                    {t('contact')}
                  </Link>
                  <div className="dot" />
                  <Link href="/join" className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5">
                    {t('join')}
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
              <Image
                src="/assets/images/Circuit Primary.svg"
                width={960}
                height={380}
                alt="outline"
                className="relative z-2"
              />
            </div>
          </div>
        </div>

        <button
          className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <Image
            src={`/assets/icons/${isOpen ? "close" : "menu"}.svg`}
            alt="menu"
            width={24}
            height={24}
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  );
};

export default Nav;
