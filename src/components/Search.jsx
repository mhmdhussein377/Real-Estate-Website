import React, { useContext } from 'react'

import CountryDropdown from "../components/CountryDropdown";
import PropertyDropdown from "../components/PropertyDropdown"
import PriceDropdown from "../components/PriceRangeDropdown"

import { RiSearch2Line } from "react-icons/ri";
import { HouseContext } from './HouseContext';

const Search = () => {

  let {handleClick} = useContext(HouseContext);

  return (
    <div className="px-8 py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-3 relative lg:-top-4 shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg">
      <CountryDropdown />
      <PropertyDropdown />
      <PriceDropdown />
      <button onClick={() => handleClick()} className='bg-violet-600 hover:bg-violet-700 transition w-full lg:max-w-[160px] h-16 flex items-center justify-center rounded-lg text-lg'>
        <RiSearch2Line color="white"/>
      </button>
    </div>
  );
}

export default Search