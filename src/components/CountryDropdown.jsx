import React, { useState } from 'react'

import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

import { Menu } from "@headlessui/react";
import { useContext } from 'react';
import { HouseContext } from './HouseContext';

const CountryDropdown = () => {

  let {country, setCountry, countries} = useContext(HouseContext);

  let [isOpened, setIsOpened] = useState(false);

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        className="dropdown-btn w-full text-left"
        onClick={() => setIsOpened(!isOpened)}
      >
        <RiMapPinLine className="dropdown-icon-primary" />
        <div className="">
          <div className="text-[15px] font-medium leading-tight">{country}</div>
          <div className="text-[13px]">Select your place</div>
        </div>
        {isOpened ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
          {countries.map((country, index) => {
            return (
              <Menu.Item onClick={() => setCountry(country)} className='cursor-pointer hover:text-violet-700 transition' as='li' key={index}>
                {country}
              </Menu.Item>
            )
          })}
      </Menu.Items>
    </Menu>
  );
}

export default CountryDropdown