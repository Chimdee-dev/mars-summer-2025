import React from 'react'

export const Footer = () => {
    return (
        <div className='flex flex-wrap bg-white w-full h-[300px] p-1 shadow-lg rounded-[20px] border-blue-200 justify-between items-center gap-6 mt-10 mb-10'>
            <div className=''>
                <h1 className='text-4xl font-bold text-blue-800 ml-15'>MORENT</h1>
                <br />
                <p className='ml-15'>Our vision is to provide convenience
                    <br />and help increase your sales business.</p>
            </div>
            <div className='flex flex-wrap gap-6'>
                <div>
                    <h3>About</h3>
                    <br />
                    <img src="images/About.png" alt="" />
                </div>
                <div>
                    <h3>Community</h3>
                    <br />
                    <img src="images/Community.png" alt="" />
                </div>
                <br />
                <div>
                    <h3>Socials</h3>
                    <br />
                    <img src="images/Socials.png" alt="" />
                </div>
            </div>
            <hr className='' />
            <div className='flex justify-around'>
                <h5>©2022 MORENT. All rights reserved</h5>
                <div className='flex gap-6 ml-15'>
                    <h4>Privacy & Policy</h4>
                    <h4>Terms & Condition</h4>
                </div>
            </div>
        </div>

    )
}
export default Footer;

