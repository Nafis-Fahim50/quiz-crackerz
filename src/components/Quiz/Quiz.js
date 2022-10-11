import React from 'react';

const Quiz = ({ quiz }) => {
    // console.log(quiz);
    const options = quiz.options;
    // console.log(options);
    const { question } = quiz;
    return (
        <div className='mt-12 shadow-lg shadow-slate-300'>
            <div className='py-5'>
                <h2 className='text-2xl text-rose-400 font-semibold ml-5'>Q. {question}</h2>
            </div>
            <div className='grid md:grid-cols-2 gap-5 p-5'>
                {
                    options.map(option =>
                        <div className='p-5 border-2 border-rose-400 text-rose-400 rounded-md'>
                            <input type="radio" id="quiz" name="question" value="option" />
                            <label className='ml-5' for="option">{option}</label>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Quiz;