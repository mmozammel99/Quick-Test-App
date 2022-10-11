import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const itm = useLoaderData()
    const item = itm.data
    return (
        <div>
             {
                        item.map(item => <Quizitem
                            key={quiz.id}
                            quiz={quiz}></Quizitem>)
                    }
           
        </div>
    );
};

export default Statistics;