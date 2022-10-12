import React from 'react';
import Home from '../Home/Home';
import image from '../../image/quiz.jpeg'

const HomePage = () => {
    return (
        <div>
            <div className='mt-5'>
                <img className='w-full h-96' src={image} alt="" />
            </div>
            <div className='mt-5 text-center'>
                <h1 className='md:text-3xl font-bold text-rose-400'>Welcome to Online Quiz Crackerz</h1>
                <p className='mt-3 px-2'>Check your skill to join our programming quiz.
                    Here you can find different kind of courese quiz.
                    Such as JS, CSS, React etc. Select your topic and start Quiz!
                </p>
            </div>
            <Home></Home>
        </div>
    );
};

export default HomePage;