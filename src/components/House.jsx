import React from 'react'

import { BiBed, BiBath, BiArea } from "react-icons/bi";

const House = ({type, address, image, country, bedrooms, bathrooms, surface, price}) => {

  return (
    <div className="bg-white shadow-1 p-5 rounded-tl-[90px] w-full max-w-[352px] mx-auto hover:shadow-2xl transition">
      <img src={image} alt="House" className="mb-8" />
      <div className="flex gap-x-2 mb-4 text-sm font-medium">
        <div className="bg-green-500 rounded-full text-white px-2 py-0.5">
          {type}
        </div>
        <div className="bg-violet-500 rounded-full text-white px-2 py-0.5">
          {country}
        </div>
      </div>
      <div className="font-semibold text-lg max-w-[260px]">{address}</div>

      <div className="flex items-center gap-x-4 my-3">
        <div className="flex items-center text-gray-600 gap-1">
          <div>
            <BiBed size={18}/>
          </div>
          <div>{bedrooms}</div>
        </div>

        <div className="flex items-center ">
          <div>
            <BiBath />
          </div>
          <div>{bathrooms}</div>
        </div>

        <div className="flex items-center">
          <div>
            <BiArea />
          </div>
          <div>{surface}</div>
        </div>
      </div>
      <div className="text-lg font-semibold text-violet-600">$ {price}</div>
    </div>
  );
}

export default House