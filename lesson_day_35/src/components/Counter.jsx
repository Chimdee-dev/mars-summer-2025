import React from 'react'

export const Counter = () => {
    const [count, setCount] = React.useState(0);

    const increment = () => {        
        setCount(count + 1);}
    const decrement = () => {
        setCount(count - 1);
    }
    const reset = () => {
        setCount(0);
    }
  return (
    <div className='flex felx-col items-center justify-center min-h-screen bg-green-100' >
        <div className='bg-white p-8 rounded-xl shadow-lg text-center' >
            <h1 className='text-3xl font-bold mb-4 text-gray-400' >Counter</h1>
            <p>Current count: <strong>{count}</strong></p>
            <div className='space-x-4 mt-6'>
                <button onClick={increment} className='px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300' >+Add</button>
                <button onClick={decrement} className='px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300' >- Reduce</button>
                <button onClick={reset} className='px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300' >Reset</button>
            </div>
        </div>
    </div>
  )
}

