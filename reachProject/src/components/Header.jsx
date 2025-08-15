import React from 'react';
import { CiHeart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { CiBellOn } from "react-icons/ci";
import { IoIosSettings } from "react-icons/io";

export const Header = () => {
  return (
    <div>
      <nav className='hidden lg:flex justify-between items-center text-gray rounded-lg  bb-1 border-blue-300 m-auto mt-5 gap-10'>
        <h1 className='text-4xl font-bold text-blue-800 ml-15 '>MORENT</h1>
        <div className='flex justify-center items-center gap-4 rounded-[50px] shadow-lg border-1 border-gray-200 br-[20px]' >
          <input className='w-[400px] p-5' type="text" placeholder='Search something here' />
        </div>

        <div className='flex justify-around items-center gap-1 w-'>
          <Link to="/liked" className='relative flex items-center space-x-2 text-gray-500 hover:text-blue-600 text-lg hover:text-primary-blue transition-colors duration-300'> 
        <CiHeart />
        </Link>
        <CiBellOn />
        <IoIosSettings />
          <img src="images/Image.png" alt="user" className='p-10' />
        </div>
      </nav>
      <nav className='lg:hidden md:flex sm:flex text-gray rounded-lg  bb-1 border-blue-300 m-auto'>
        <div className='flex justify-around mt-10'>
        <h1 className='text-xl font-bold text-blue-800'>MORENT</h1>
        <img src="images/Image.png" alt="user" />
        </div>
        
        <div className='ml-40 rounded-[20px] w-[200px] shadow-lg border-1 border-gray-200 br-[20px]'>
          <input className='w-[200px] p-3' type="text" placeholder='Search something here' />
        </div>
        
        <div className='hidden flex justify-around items-center gap-1'>
          <img src="images/heart.png" alt="heart" className='p-10' />
          <img src="images/notification.png" alt="bell" className='p-10' />
          <img src="images/setting-2.png" alt="setting" className='p-10' />
        </div>
       
      </nav>
    </div>
  )
}
export default Header;