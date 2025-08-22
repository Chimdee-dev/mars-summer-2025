import React from 'react';
import { IoBagCheckOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useLikedProducts } from './OrderProduct';


// ⬅️ Add this line

export const ProductCard = ({ product }) => {
    const { likedProducts, toggleLikeProduct } = useLikedProducts(); 
    const isLiked = likedProducts.some(likedProduct => likedProduct.id === product.id);
    const handleLikeClick = (event) => {
        event.stopPropagation();
        toggleLikeProduct(product);
    }
    // ⬅️ Use the custom hook to access liked products
    // ⬅️ Import useNavigate from react-router-dom

    return (
        <div className="flex mt-5 bg-pink-50">
            <div className="relative flex flex-col bg-slate-100  hover:shadow-lg transition-shadow duration-300" >
                {/* Product Image */}
                <div className="w-[300px]  h-[360px] rounded-2xl overflow-hidden relative">
                    <img className="w-full h-full object-cover"
                        src={product.thumbnail}
                        alt="Black Automatic Watch"
                    />
                    <button
                        onClick={handleLikeClick} // ✅ Зөв функц
                        className="absolute top-5 right-5 p-3 bg-gray rounded-full shadow-md hover:bg-gray-100 transition-colors">
                        <IoBagCheckOutline className="text-gray-800 text-xl" />
                    </button>

                </div>

                {/* Product Details */}
                <div className="p-5 flex items-center justify-between">
                    <div>
                        <h3 className="text-gray-900 text-lg font-semibold font-['Poppins']">
                            {product.title}
                        </h3>
                        <p className="text-gray-600 text-sm font-normal font-['Poppins']">
                            {product.category}
                        </p>
                    </div>

                    {/* Pricing */}
                    <div>
                        <p className="text-gray-900 text-lg font-semibold">{product.discountPercentage}%</p>
                        <p className="text-gray-600 text-sm line-through">${product.price}</p>
                    </div>
                </div>

                {/* Ratings */}
                <div className="flex items-center ml-4 mt-2 space-x-1 pb-5">
                    <button className="hover:text-yellow-600 transition-colors">
                        <FaRegStar />
                    </button>
                    <span className="text-gray-900 text-base font-semibold">{product.rating}</span>
                    <span className="text-gray-600 text-sm">({product.stock})</span>
                </div>
            </div>
        </div>
    );
};
