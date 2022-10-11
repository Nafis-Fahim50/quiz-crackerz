import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-center text-rose-400 mt-5 md:text-3xl font-bold'>Simple Interview Question</h1>
            <div className='mt-5 px-5 text-justify'>
                <h3 className='md:text-2xl font-bold'>Q1. What is the purspose of react route?</h3>
                <p className='mt-2 '> <span className='text-rose-400 font-bold'>Answer: </span>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
            </div>
            <div className='mt-10 px-5 text-justify'>
                <h3  className='md:text-2xl font-bold'>Q2. How does context API work?</h3>
                <p className='mt-2'>  <span className='text-rose-400 font-bold'>Answer: </span> The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className='mt-10 px-5 text-justify'>
                <h3 className='md:text-2xl font-bold'>Q3. What are the uses of useRef() react hook?</h3>
                <p className='mt-2'><span className='text-rose-400 font-bold'>Answer: </span> useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
            </div>
        
        </div>
    );
};

export default Blog;