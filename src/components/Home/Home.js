import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import image from '../../image/quiz.jpeg'
const Home = () => {
    const topics = useLoaderData().data;
    return (
        <div className='mb-16'>
            <div className='mt-5'>
                <img className='w-full h-96' src={image} alt="" />
            </div>
            <div className='mt-5 text-center'>
                <h1 className='text-3xl font-bold text-rose-400'>Welcome to Online Quiz Crackerz</h1>
                <p className='mt-3'>Check your skill to join our programming quiz.
                    Here you can find different kind of courese quiz.
                    Such as JS, CSS, React etc. Select your topic and start Quiz!.
                </p>
            </div>
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