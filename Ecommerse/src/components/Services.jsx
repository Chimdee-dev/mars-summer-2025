import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

export const Services = () => {
    return (
        <div className="w-screen lg:w-[1296px]">
            {/* Top services row */}
            <div className='w-screen overflow-x-scroll'>
                <div className="w-[1296px] gap-6 mt-10 rounded-2xl border border-gray-400 
                            flex flex-row md:flex-row md:justify-between items-stretch p-5 overflow-x-scroll">

                    {/* Service item */}
                    <div className="flex items-center md:flex-1">
                        <img src="images/svg (6).svg" alt="" className="w-10 h-10" />
                        <div className="ml-5">
                            <p className="font-medium">Free shipping</p>
                            <p className="text-sm text-gray-600">On orders over $50.00</p>
                        </div>
                    </div>

                    <div className="hidden md:block h-[80px] border border-gray-300"></div>

                    <div className="flex items-center md:flex-1">
                        <img src="images/svg (1).svg" alt="" className="w-10 h-10" />
                        <div className="ml-5">
                            <p className="font-medium">Very easy to return</p>
                            <p className="text-sm text-gray-600">just phone number</p>
                        </div>
                    </div>

                    <div className="hidden md:block h-[80px] border border-gray-300"></div>

                    <div className="flex items-center md:flex-1">
                        <img src="images/svg (7).svg" alt="" className="w-10 h-10" />
                        <div className="ml-5">
                            <p className="font-medium">Worldwide delivery</p>
                            <p className="text-sm text-gray-600">Fast delivery worldwide</p>
                        </div>
                    </div>

                    <div className="hidden md:block h-[80px] border border-gray-300"></div>

                    <div className="flex items-center md:flex-1">
                        <img src="images/svg (8).svg" alt="" className="w-10 h-10" />
                        <div className="ml-5">
                            <p className="font-medium">Refunds policy</p>
                            <p className="text-sm text-gray-600">60 days return for any reason</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Explore section */}
            <div className="mt-20 xl:w-[1296px] w-screen">
                <h2 className="text-gray-900 text-2xl md:text-4xl font-semibold font-['Poppins'] leading-snug">
                    Start exploring. <span className="cl:hidden  text-gray-600/80 ">Good things are waiting for you</span>
                </h2>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {/* Card 1 */}
                    <div className="p-6 rounded-2xl border border-gray-400 flex flex-col md:flex-row xl:w-[400px] md:w-[300px] justify-between items-center w-full">
                        <div className="mb-4 md:mb-0">
                            <p className="text-gray-900 text-xl md:text-2xl font-semibold">For Men's</p>
                            <p className="text-gray-600 text-sm">Starting at $24</p>
                        </div>
                        <div className="hidden md:block h-[80px] border border-gray-300 mx-4"></div>
                        <button className="flex items-center gap-2 text-gray-600 text-sm hover:text-gray-900 transition duration-300 ease-in-out">
                            SHOP NOW
                            <FaLongArrowAltRight />
                        </button>
                    </div>

                    {/* Card 2 */}
                    <div className="p-6 rounded-2xl border border-gray-400 flex flex-col md:flex-row xl:w-[400px] md:w-[300px] justify-between items-center w-full">
                        <div className="mb-4 md:mb-0">
                            <p className="text-gray-900 text-xl md:text-2xl font-semibold">For Women's</p>
                            <p className="text-gray-600 text-sm">Starting at $24</p>
                        </div>
                        <div className="hidden md:block h-[80px] border border-gray-300 mx-4"></div>
                        <button className="flex items-center gap-2 text-gray-600 text-sm hover:text-gray-900 transition duration-300 ease-in-out">
                            SHOP NOW
                            <FaLongArrowAltRight />
                        </button>
                    </div>

                    {/* Card 3 */}
                    <div className="p-6 rounded-2xl border border-gray-400 flex flex-col md:flex-row xl:w-[400px] md:w-[300px] justify-between items-center w-full">
                        <div className="mb-4 md:mb-0">
                            <p className="text-gray-900 text-xl md:text-2xl font-semibold">Accessories</p>
                            <p className="text-gray-600 text-sm">Starting at $24</p>
                        </div>
                        <div className="hidden md:block h-[80px] border border-gray-300 mx-4"></div>
                        <button className="flex items-center gap-2 text-gray-600 text-sm hover:text-gray-900 transition duration-300 ease-in-out">
                            SHOP NOW
                            <FaLongArrowAltRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
