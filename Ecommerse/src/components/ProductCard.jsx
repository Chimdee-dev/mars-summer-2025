import React from 'react';
import { IoBagCheckOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";

export const ProductCard = () => {
    return (
        <div className="flex mt-5">
            <div className="relative flex flex-col hover:shadow-lg transition-shadow duration-300">
                {/* Product Image */}
                <div className="w-[300px] h-[360px] rounded-2xl overflow-hidden relative">
                    <img className="w-full h-full object-cover"
                        src="images/watch.png"
                        alt="Black Automatic Watch"
                    />
                    <button className="absolute top-5 right-5 p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
                        <IoBagCheckOutline className="text-gray-800 text-xl" />
                    </button>
                </div>

                {/* Product Details */}
                <div className="p-5 flex items-center justify-around">
                    <div className=' '>
                        <h3 className="text-gray-900 text-lg font-semibold font-['Poppins']">
                            Black Automatic Watch
                        </h3>
                        <p className="text-gray-600 text-sm font-normal font-['Poppins']">
                            Accessories
                        </p>
                    </div>

                    {/* Pricing */}
                    <div className="">
                        <p className="text-gray-900 text-lg font-semibold">$169.99</p>
                        <p className="text-gray-600 text-sm line-through">$199.99</p>
                    </div>
                    {/* Ratings */}

                </div>
                <div className="flex items-center ml-4 mt-2 space-x-1 pb-5">
                    <button className=" hover:text-yellow-600 transition-colors">
                        <FaRegStar />
                    </button>
                    <span className="text-gray-900 text-base font-semibold">4.9</span>
                    <span className="text-gray-600 text-sm">(98)</span>
                </div>
            </div>
        </div>
    );
};
