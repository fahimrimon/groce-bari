import React from 'react'
import Book from './Book';
import { itemData } from './BookingData';

function Booking() {
    return (
        <div className='mx-20 lg:mt-32 mt-24'>
        <h2 className='text-green-500 font-mono text-center text-xl mb-2'>Book Now Latest</h2>
                    <h2 className='text-3xl text-center font-bold -mb-6'>ARRIVAL PRODUCTS</h2>
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 my-20 gap-x-8 gap-y-8 '>
                    
                    {itemData.map((item) => (
                <Book item={item} key={item.id}></Book>
              
            ))}
                </div>
        </div>
            );
}

export default Booking
