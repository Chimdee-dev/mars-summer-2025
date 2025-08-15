import React from 'react'
import { FaHeart, FaRegHeart, FaGasPump, FaCog, FaUsers } from 'react-icons/fa';
import { useLikedCars } from '../context/LikedCarsContext.jsx';

export const Car = ({ car }) => {
    // Assuming you have a context or state management for liked cars
    const {likedCars, toggleLikeCar} = useLikedCars();
    const isLiked = likedCars.some(likedCar => likedCar.id === car.id);
    const handleLikeClick = (event) => {
        event.stopPropagation();
        toggleLikeCar(car);
    }
    return (
        <div className='bg-white p-5 rounded-lg shadow-md gap-3 w-[280px] h-[388px] relative'>
            <div className=''>
                <h3 className='text-xl font-semibold text-dark-gray'>{car.name}</h3>
                <span className='text-sm text-gray-500'>{car.type}</span>
            </div>
            <button className='text-2xl text-gray-400 focus:outline-none absolute top-5 left-55' 
            onClick={handleLikeClick}>

                {isLiked ? (
                <FaHeart className= "text-red-500 hover:text-red-600"/>
                ) : (
                    <FaRegHeart className='text-light-gray hover:text-red-500' />
                )}
            </button>
            <div>
                <div className='mb-2 absolute top-35 left-5'>
                    <img src={car.imageUrl} alt={car.name} className='max-w-fill h-auto rounded-md' />
                </div>
            </div>
            <div className='flex justify-around text-sm text-medium-gray absolute bottom-20 left-5 gap-4'>
                <p className='flex items-center gap-1'> <FaGasPump className=" text-gray-500" />{car.fuelCapacity}</p>
                <p className='flex items-center gap-1' > <FaCog className=" text-gray-500" />{car.transmission}</p>
                <p className='flex items-center gap-1' > <FaUsers className=" text-gray-500" />{car.passengers}</p>
            </div>
            <div className='flex justify-between mt-auto items-center absolute bottom-5 left-5 gap-4'>
                <div className='text-dark-gray' >
                    <span>${car.pricePerDay.toFixed(2)} </span>
                    <span className='text-md font-medium-gray'>/day</span>
                </div>
                <button className='bg-[#3563e9] text-white px-3 py-2 rounded-md text-md font-semibold hover:bg-blue-500' >Rent Now</button>
            </div>
        </div>
    )
}
export default Car;