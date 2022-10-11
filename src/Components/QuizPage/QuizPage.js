import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';


const QuizPage = () => {
    const quiz = useLoaderData()
    const { logo, name, questions } = quiz.data;
    return (
        <div className='text-center '>
            <img className='w-25' src={logo} alt="" />
            <h3>{name} Quiz</h3>

            <div className='row '>
                {
                    questions.map(qus => <Questions
                        key={qus.id}
                        questions={qus}>

                    </Questions>)
                }

            </div>
        </div>
    )
};

export default QuizPage;