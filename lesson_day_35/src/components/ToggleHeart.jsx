import React, { useState } from 'react';
import {FaHeart, FaRegHeart } from 'react-icons/fa';

export const ToggleHeart = () => {
    const [isLiked, setIsLiked] = useState(false);
    const handleLike = () => {
        setIsLiked(!isLiked);
    }

    return (
        <div className='flex items-center justify-center h-screen min-h-screen bg-gray-100'>
            <button onClick={handleLike} >
                {isLiked ? (
                    <FaHeart className="text-red-500  transitionn scale-100" />
                ) :(
                    <FaRegHeart className="text-gray-500 hover:text-red transition-colors duration-200" />
                )
                }

            </button>
        </div>
    )
}


