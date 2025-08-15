import React, { useEffect, useState } from 'react'

export const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Сүлжээний алдаа гарлаа')
                }
                return response.json();
            })
            .then(data => {
                setProducts(data.products);
                console.log(data.products);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            })
    }
        , []);
    if (loading) {
        return <div className='flex items-center justify-center min-h-screen bg-purple-100'>Loading...</div>;
    }
    if (error) {
        return <div className='flex items-center justify-center min-h-screen bg-purple-100'>Алдаа гарлаа: {error}</div>;
    }
    return (
        <div className='flex flex-col item-center justify-center min-h-screen bg-purple-100' >
            <h1 className='text-center text-3xl text-gray-800' >My Products</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6' >
                {
                    products.slice(0.6).map((product) => (
                        <div key={product.id} className='bg-white rounded-lg overflow-hidden transition-transfrom hover:scale-105' >
                            <img src={product.thumbnail} alt={product.title} className='w-full h-48 object-cover' />
                            <div className='p-4' >
                                <h3 className='text-xl font-bold text-gray-800 truncate' >{product.title}</h3>
                                <p className='text-gray-600 mt-2 '>{product.description}</p>
                                <div className='mt-4 flex items-center justify-between'>
                                    <span className='text-2xl font-bold text-indigo-600'>${product.price}</span>
                                    <button className='bg-indigo-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-600 transition duration-200'> Add to cart</button>
                                </div>
                            </div>
                        </div>
                    )
                    )
                }
            </div>
        </div>
    )
}
