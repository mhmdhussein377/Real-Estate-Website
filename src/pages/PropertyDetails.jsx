import React from 'react'

import {housesData} from "../data";

import {useParams} from "react-router-dom";

import {BiBed, BiBath, BiArea} from 'react-icons/bi';

import {Link} from "react-router-dom";

const PropertyDetails = () => {
    let {id} = useParams();

    let house = housesData.find((house) => house.id === + id);

    return (
      <section>
        <div className="container mx-auto min-h-[800px] mb-14">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">{house.name}</h2>
              <h3 className="font-medium text-lg mb-4">{house.address}</h3>
            </div>
            <div className="flex mb-4 lg:mb-0 gap-x-2 text-sm mt-2">
              <div className="bg-green-500 px-3 rounded-full text-white">
                {house.type}
              </div>
              <div className="bg-violet-500 px-3 rounded-full text-white">
                {house.country}
              </div>
            </div>
            <div className="text-violet-600 text-2xl font-semibold">
              $ {house.price}
            </div>
          </div>
          <div className="flex flex-col items-start gap-8 xl:flex-row">
            <div className="max-w-[768px]">
              <div className="mb-8">
                <img src={house.imageLg} alt="house" />
              </div>
              <div className="flex gap-x-6 text-violet-700 mb-6">
                <div className="flex gap-x-2 items-center">
                  <BiBed className="text-2xl" />
                  <div>{house.bedrooms}</div>
                </div>
                <div className="flex gap-x-2 items-center">
                  <BiBath className="text-2xl" />
                  <div>{house.bathrooms}</div>
                </div>
                <div className="flex gap-x-2 items-center">
                  <BiArea className="text-2xl" />
                  <div>{house.surface}</div>
                </div>
              </div>
              <div>{house.description}</div>
            </div>
            <div className="px-6 py-8 border border-gray-300 rounded-lg flex-1 w-full bg-white">
              <div className="flex items-center gap-x-4 mb-8">
                <div className="w-20 h-20 p-1 border border-gray-300 rounded-full">
                  <img src={house.agent.image} alt="person" />
                </div>
                <div>
                  <div className="font-semibold text-lg">
                    {house.agent.name}
                  </div>
                  <Link to="" className="text-violet-700 text-md">
                    View Listings
                  </Link>
                </div>
              </div>
              <form className='flex flex-col gap-4' onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Name*"
                  className="border border-gray-300 p-2 w-full rounded outline-0 focus:border-violet-700"
                />
                <input
                  type="text"
                  placeholder="Email*"
                  className="border border-gray-300 p-2 w-full rounded outline-0 focus:border-violet-700"
                />
                <input
                  type="text"
                  placeholder="Phone*"
                  className="border border-gray-300 p-2 w-full rounded outline-0 focus:border-violet-700"
                />
                <textarea
                  className="w-full border border-gray-300 focus:border-violet-700 outline-none p-2 min-h-[180px] resize-none rounded text-gray-400"
                  placeholder="Message*"
                  defaultValue="Hello, I am interested in [Modern apartments]"
                ></textarea>
                <div className='flex gap-2'>
                  <button className='bg-violet-700 hover:bg-violet-800 text-white p-3 rounded text-sm transition w-full'>Send message</button>
                  <button className='border border-violet-700 rounded p-3 text-violet-700 hover:border-violet-500 hover:text-violet-500 transition text-sm w-full'>Call</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
}

export default PropertyDetails