import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const Quizitem = ({ quiz }) => {
    const { name, id, logo, total } = quiz;
    const navigator = useNavigate()
    const quizHandel = () => {
        navigator(`/quiz/${id}`)
    }
    return (
        <div className='card m-4 text-canter ' style={{ width: '25rem' }}>
            <Card.Img variant="top" className='w-auto m-2' src={logo} />
            <Card.Body >
                <Card.Title className='text-center pb-3 '><h3>{name}</h3></Card.Title>
                <div className='d-flex align-items-center justify-content-between'>
                    <Button onClick={quizHandel} variant="success">Start Quiz</Button>
                    <h6>Total Quiz {total}</h6>
                </div>
            </Card.Body>
        </div>
    );
};

export default Quizitem;