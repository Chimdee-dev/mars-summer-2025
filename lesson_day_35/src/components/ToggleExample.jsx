import React, { useState } from 'react'

export const ToggleExample = () => {
    const [isVisible, setIsVisible] = useState(false);
    const handleShow = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-blue-100 p-8">
            <div className='bg-white p-8 rounded-xl shadow-lg text-center' >
                <h1 className='text-3xl font-bold text-gray-600' >Toggle example</h1>
                <button onClick={handleShow} className='px-6 py-3 text-lg font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors duration-300 shadow-md' >
                    {isVisible ? 'Hide' : 'Show'}
                </button>
                {
                    isVisible && (
                        <div className='mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg shadow-sm'>
                            <p className='text-gray-700 font-semibold '>This is the content that gets toggled!</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
