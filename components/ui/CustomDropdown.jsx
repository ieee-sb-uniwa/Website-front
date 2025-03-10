"use client";
import React, { useState, useEffect } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link } from '@i18n/navigation'; 

const CustomDropdown = ({ category, items, setIsOpen }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  // Function to check screen size and set the isMobile state
  const handleResize = () => {
    setIsMobile(window.innerWidth < 1024);  
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        // Mobile Dropdown
        <div className="lg:hidden">
          <Button
            variant="text"
            className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5 flex items-center gap-3 mr-4"
            onClick={toggleMenu}
          >
            {category}{" "}
            <ChevronDownIcon
              strokeWidth={3.5}
              className={`h-3.5 w-3.5 transition-transform ${
                openMenu ? "rotate-180" : ""
              }`}
            />
          </Button>

          {openMenu && (
            <div className="w-full mt-2 rounded-lg p-2">
              <ul className="flex flex-col gap-4 mt-1 mb-1">
                {items.map(({ title, link }) => (
                  <li key={title}>
                    <Link
                      href={link}
                      onClick={()=>setIsOpen(false)}
                      className="base-bold text-p4 uppercase transition-colors duration-450 cursor-pointer hover:text-p1 max-lg:my-4 ml-4 max-lg:h5"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        // Desktop Dropdown
        <div className="max-lg:hidden">
          <Menu open={openMenu} handler={setOpenMenu} allowHover>
            <MenuHandler>
              <Button
                variant="text"
                className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5 flex items-center gap-3 mr-4"
                onClick={toggleMenu}
              >
                {category}{" "}
                <ChevronDownIcon
                  strokeWidth={3.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    openMenu ? "rotate-180" : ""
                  }`}
                />
              </Button>
            </MenuHandler>
            <MenuList className="bg-s2 w-[18em] gap-3 mt-2 z-50 overflow:visible rounded-lg">
              <ul className="col-span-4 flex w-full flex-col gap-1">
                {items.map(({ title, link }) => (
                  <li key={title}>
                    <Link
                      href={link}
                      onClick={()=>setIsOpen(false)}
                      className="base-bold text-p4 uppercase transition-colors duration-450 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
                    >
                      <MenuItem>{title}</MenuItem>
                    </Link>
                  </li>
                ))}
              </ul>
            </MenuList>
          </Menu>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
