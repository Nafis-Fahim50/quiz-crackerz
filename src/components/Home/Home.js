import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Home = () => {
    const topics = useLoaderData().data;
    return (
        <div className=''>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 mt-12 gap-5'>
                {
                    topics.map(topic => <Topic
                        key={topic.id}
                        topic={topic}></Topic>)
                }
            </div>
        </div>
    );
};

export default Home;