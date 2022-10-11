import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const data = useLoaderData().data;
    // const {}
    // console.log(data)
    return (
        <div>
            <div className='mt-10'>
                <LineChart width={500} height={400} data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                    <Tooltip></Tooltip>
                </LineChart>
            </div>
            <small className='ml-44 mt-12 text-rose-400 font-bold'>Fig: Simple Line Chart</small>
        </div>
    );
};

export default Statistics;