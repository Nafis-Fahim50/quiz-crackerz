import {EyeIcon } from '@heroicons/react/24/solid'

const Quiz = ({ quiz }) => {
    // console.log(quiz);
    const options = quiz.options;
    // console.log(options);
    const { question,correctAnswer} = quiz;

    const handleToShowAnswer = (answer)=>{
       alert(answer);
    }

    const handleRightAnswer = option =>{
        if(option === correctAnswer){
           alert('Congratulations! Your answer is right')
        }
        else{
            alert('Opps! Your answer is wrong')
        }
    }
    return (
        <div className='mt-12 shadow-lg shadow-slate-300'>
            <div className='py-5 flex justify-between'>
                <h2 className='text-2xl text-rose-400 font-semibold ml-5'>Q. {question}</h2>
                <button onClick={()=> handleToShowAnswer(correctAnswer)}>
                    <EyeIcon className="h-6 w-6 mr-5 text-blue-500"/>
                </button>  
            </div>
            <div className='grid md:grid-cols-2 gap-5 p-5'>
                {
                    options.map(option => <section
                    >
                        <div className='p-5 border-2 border-rose-400 text-rose-400 rounded-md hover:bg-red-200'>
                            <input onClick={()=>handleRightAnswer(option)} type="radio" name="question"/>
                            <label className='ml-5'>{option}</label>
                        </div>
                    </section>)
                }
            </div>
        </div>
        
    );
};

export default Quiz;