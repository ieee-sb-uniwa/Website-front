// components/CustomDropdown.js
"use client"
import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {Link} from '@/i18n/routing'; 

const CustomDropdown = ({ category, items }) => {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <Menu open={openMenu} handler={setOpenMenu} allowHover>
      <MenuHandler>
        <Button
          variant="text"
          className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5 flex items-center gap-3 "
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
      <MenuList className="bg-s1 hidden w-[16em] gap-3 lg:grid mt-5 rounded-lg">
        <ul className="col-span-4 flex w-full flex-col gap-2 mt-1 mb-1">
            {items.map(({ title, link }) => (
                <li key={title}>
                    <Link
                        href={link} 
                        className="base-bold text-p4 uppercase transition-colors duration-450 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
                    >
                        <MenuItem>
                            {title}
                        </MenuItem>
                    </Link>
                </li>
            ))}
        </ul>
      </MenuList>
    </Menu>
  );
};

export default CustomDropdown;
