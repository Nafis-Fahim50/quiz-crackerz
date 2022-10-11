import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Topics = () => {
    const topic = useLoaderData().data;
    // console.log(topic)
    return (
        <div>
            <h2>Topics: {topic.length}</h2>
        </div>
    );
};

export default Topics;