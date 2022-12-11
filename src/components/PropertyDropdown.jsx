import React, { useState } from "react";

import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

import { Menu } from "@headlessui/react";
import { useContext } from "react";
import { HouseContext } from "./HouseContext";

const PropertyDropdown = () => {
  let { property, setProperty, properties } = useContext(HouseContext);

  let [isOpened, setIsOpened] = useState(false);

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        className="dropdown-btn w-full text-left"
        onClick={() => setIsOpened(!isOpened)}
      >
        <RiHome5Line className="dropdown-icon-primary" />
        <div className="">
          <div className="text-[15px] font-medium leading-tight">
            {property}
          </div>
          <div className="text-[13px]">Select your property</div>
        </div>
        {isOpened ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {properties.map((property, index) => {
          return (
            <Menu.Item
              onClick={() => setProperty(property)}
              className="cursor-pointer hover:text-violet-700 transition"
              as="li"
              key={index}
            >
              {property}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;
