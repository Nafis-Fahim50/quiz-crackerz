import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { name, logo, id, total } = topic;
    return (
        <div className='border-2 rounded-md border-white shadow-lg shadow-slate-300'>
            <div className=' bg-rose-300 rounded-md'>
                <img className='w-full' src={logo} alt="" />
            </div>
            <div className='mt-5 mb-3 md:flex justify-between px-1'>
                <p className='text-purple-500 font-bold'>{name}</p>
                <p className='text-green-500 font-bold'>Total Quiz: {total}</p>
                <Link to={`/quiz/${id}`}>
                    <button className='py-1 px-3 rounded-md font-medium text-white bg-rose-500 hover:bg-green-400'>Start Quiz</button>
                </Link>
            </div>
        </div>
    );
};

export default Topic;