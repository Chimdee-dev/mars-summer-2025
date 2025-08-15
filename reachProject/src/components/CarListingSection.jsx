import React from 'react'
import Car from './Car'
import cars from '../data/cars'

export const CarListingSection = () => {
    return (
        <section className='bg-[#f6f7f9] p-8 md:px-12 lg:px20 bg-bg-light'>
            <div className='flex justify-between items-baseline mb-6'>
                <h2 className='text-2xl font-bold text-gray-400'>Popular Car</h2>
                <a href="#" className='text-light-gray font-semibold text-sm hover:underline'>View All</a>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
        lg:grid-cols-4 gap-8 mb-10'>
                {
                    cars.slice(0, 4).map(car => (
                        <Car key={car.id} car={car} />
                    ))
                }
            </div>
            <div className='flex justify-between items-baseline mt-6 mt-12'>
                <h2 className='text-2xl font-bold text-gray-400'>Recommendation Cars</h2>

            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                {
                    cars.slice(4, 12).map(car => (
                        <Car key={car.id} car={car} />
                    ))
                }
            </div>

            <div className='text-center my-8 '>
                <button className='bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-dark-gray transition-colors duration-200' >Show more car</button>
            </div>
        </section>
    )
}

