import React from 'react'

export const Hero = () => {
    return (
        <div className='lg:flex:wrap items-center gap-5 mt-8 ml-15'>
            <div className='lg:flex flex:wrap gap-15'>
                <img src="/images/Ads 1.png" alt="" />
                <img src="/images/Ads 2.png" alt="" />
            </div>
            <div className='flex flex-wrap items-center gap-5 mt-8 justify-center'>
                <div className='gap-5 w-[600px] h-[140px] p-3 shadow-lg rounded-[20px] border-blue-200'>
                    <img className='p-3 border-1 rounded-[50px] border-blue-200 ml-5 ' src="/images/Ellipse 11.png" alt="" />
                    <p>Pick-Up</p>
                    <div className='flex items-start gap-5 items-center gap-2'>
                        <img src="/images/Locations.png" alt="" />
                        <img src="/images/Time.png" alt="" />
                        <img src="/images/Date.png" alt="" />
                    </div>
                </div>
                <div className='bg-blue-800  left-170 w-[60px] h-[60px] p-1 shadow-lg rounded-[20px] border-blue-200 flex items-center justify-center '>
                    <img src="/images/Swap.png" alt="" className='' />
                </div>
                <div className='gap-5 w-[600px] h-[140px] p-3 shadow-lg rounded-[20px] border-blue-200'>
                    <img className='p-3 border-1 rounded-[50px] border-blue-200 ml-5 ' src="/images/Ellipse 11.png" alt="" />
                    <p>Pick-Up</p>
                    <div className='flex items-start gap-5 items-center gap-2'>
                        <img src="/images/Locations.png" alt="" />
                        <img src="/images/Time.png" alt="" />
                        <img src="/images/Date.png" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Hero;
