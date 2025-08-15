import React from 'react'

import { Car } from '../components/Car';
import { useLikedCars } from '../context/LikedCarsContext.jsx';
 const LikedCarsPage = () => {
  const {likedCars} = useLikedCars();
  return (
    <div className='bg-nh-light-blue min-h-screen p-4 md:px-12 lg:-px-20'>

      <h1 className='text-3xl font-bold text-dark-gray mb-6'>Liked Cars</h1>
      {likedCars.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {likedCars.map((car) => (
            <Car key={car.id} car={car} />
          ))}
        </div>
      ) : (
        <div className='text-center text-light-gray mt-10 text-lg'>
          <p>You have not liked any cars yet.</p>
          <p className='mt-2'>Go back to the <a href="/" className='text-primary-blue hover:underline' >homepage</a> to start liking cars ! </p>
        </div>
      )
      }
    </div>
  )
}
export default LikedCarsPage;
