import React from 'react';
import {FaceFrownIcon } from '@heroicons/react/24/solid'

const Error = () => {
    return (
        <div className='mt-10'>
             <div className='flex ml-96'>
                <h1 className='text-3xl font-bold text-red-500'>Sorry! This Route Not Found</h1>
                <FaceFrownIcon className="h-10 w-10 text-yellow-400"/>
             </div>
        </div>
    );
};

export default Error;