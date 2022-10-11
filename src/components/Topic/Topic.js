import React from 'react';

const Topic = ({ topic }) => {
    console.log(topic);
    const { name, logo, id } = topic;
    return (
        <div className='border-2 rounded-md border-white shadow-lg shadow-slate-300'>
            <div className=' bg-green-200 rounded-md'>
                <img className='w-full' src={logo} alt="" />
            </div>
            <div className='mt-5 mb-3 md:flex justify-between px-1'>
                <p className='text-green-500 font-bold'>{name}</p>
                <button className='py-1 px-3 rounded-md font-medium text-white bg-green-500 hover:bg-red-400'>Start Quiz</button>
            </div>

        </div>
    );
};

export default Topic;