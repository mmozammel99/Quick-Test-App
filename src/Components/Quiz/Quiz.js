import React from 'react';
import Quizitem from '../Quizitem/Quizitem';
import Col from 'react-bootstrap/Col';

const Quiz = ({ quiz }) => {
    return (
        <div>
            <div id=''>
                <Col className="col row row-cols-1 row-cols-md-2 g-5 m-5 align-middle d-flex justify-content-center">
                    {
                        quiz.map(quiz => <Quizitem
                            key={quiz.id}
                            quiz={quiz}></Quizitem>)
                    }

                </Col>
            </div>
        </div>
    );
};

export default Quiz;