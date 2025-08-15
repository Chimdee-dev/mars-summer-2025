import React from 'react';
import { ProductCard } from './ProductCard';

export const Recommend = () => {
    return (
        <div className="lg:w-[1296px] w-screen py-10">
            <div className="container mx-auto px-4">
                {/* Title */}
                <div className="mt-10">
                    <h2 className="text-2xl md:text-4xl font-semibold font-['Poppins'] leading-snug text-center">
                        <span className="text-gray-900">Recommendations. </span>
                        <span className="text-gray-600/80">Best matching products for you</span>
                    </h2>
                </div>

                {/* Product list */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
            <div className="container mx-auto px-4">
                {/* Title */}
                <div className="mt-10">
                    <h2 className="text-2xl md:text-4xl font-semibold font-['Poppins'] leading-snug text-center">
                        <span className="text-gray-900">Best Sellers.Best selling </span>
                        <span className="text-gray-600/80">Best matching products for you</span>
                    </h2>
                </div>

                {/* Product list */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </div>
    );
};