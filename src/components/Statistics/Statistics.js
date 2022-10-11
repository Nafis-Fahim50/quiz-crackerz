import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const data = useLoaderData().data;
    return (
        <div>
            <div className='mt-20'>
                <LineChart width={350} height={250} data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                    <Tooltip></Tooltip>
                </LineChart>
            </div>
            <small className='ml-32 mt-12 text-rose-400 font-bold'>Fig: Simple Line Chart</small>
        </div>
    );
};

export default Statistics;