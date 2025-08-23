import React, { useEffect, useState } from 'react';
import { IoBagCheckOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { ProductCard } from '../components/ProductCard';

export const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Сүлжээний алдаа гарлаа');
                }
                return response.json();
            })
            .then(data => {
                setProducts(data.products);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className='flex items-center justify-center min-h-screen bg-purple-100'>Loading...</div>;
    }

    if (error) {
        return <div className='flex items-center justify-center min-h-screen bg-purple-200'>Алдаа гарлаа: {error}</div>;
    }

    return (
        <div className='flex flex-col items-center justify-center min-h-screen px-2 py-1'>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl'>
                {
                    products.slice(0, 4).map((product) => (
                        <ProductCard key={product.id} product={product} />

                        // <div key={product.id} className='bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-transform hover:scale-105'>
                        //     <img src={product.thumbnail} alt={product.title} className='w-full h-48 object-cover' />
                        //     <div className='p-4'>
                        //         <h3 className='text-xl font-bold text-gray-800 truncate'>{product.title}</h3>
                        //         <p className='text-gray-600 mt-1 text-sm line-clamp-2'>{product.description}</p>
                        //         <div className='mt-4 flex items-center justify-between'>
                        //             <span className='text-xl font-bold text-indigo-600'>${product.price}</span>
                        //             <button className='bg-indigo-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-600 transition duration-200'>Add to cart</button>
                        //         </div>
                        //     </div>
                        // </div>
                    ))
                }
            </div>
        </div>
    );
};
