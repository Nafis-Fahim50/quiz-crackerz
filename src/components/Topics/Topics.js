import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Topics = () => {
    const topic = useLoaderData().data;
    // console.log(topic);
    const quizes = topic.questions;
    // console.log(quizes);
    return (
        <div>
            <div>
                <h1 className='text-3xl mt-5 text-center text-rose-400 font-bold'>Quiz of {topic.name}</h1>
            </div>
            <div>
                {
                    quizes.map(quiz => <Quiz
                        key={quiz.id}
                        quiz={quiz}></Quiz>)
                }
            </div>
        </div>
    );
};

export default Topics;