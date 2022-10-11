import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Quizitem = ({ quiz }) => {
    const { name, id, logo, total } = quiz;
    return (
        <div className='card m-4 text-canter p-0' style={{ width: '25rem' }}>

            <Card.Img variant="top" className='w-auto m-2' src={logo} />
            <Card.Body >
                <Card.Title className='text-center pb-3 '><h3>{name}</h3></Card.Title>


                <div className='d-flex align-items-center justify-content-between'>
                    <Button onClick={} variant="success">Go somewhere</Button>
                    <h6>Total Quiz {total}</h6>
                </div>
            </Card.Body>

        </div>
    );
};

export default Quizitem;