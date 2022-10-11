import React from 'react';
import Options from '../Options/Options';
import Card from 'react-bootstrap/Card';
import Ans from '../Ans/Ans';

import Swal from 'sweetalert2'

const Questions = ({ questions }) => {
    const { question, options, correctAnswer } = questions;
    // sweet alert
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const handelOption = (option, m) => {
        if (option === correctAnswer) {
            Toast.fire({
                icon: 'success',
                title: 'Your Answer is correct'
            })
        }
        else {
            Toast.fire({
                icon: 'error',
                title: 'your Answer is wring',
            }
            )
        }
    }
    return (
        <Card className="text-center col-10 col-md-7 mx-auto my-5 rounded border border-1 border-success p-0">
            <div className='bg-success d-flex'><div className=' text-light w-100 p-3 shadow'>{question}  </div> <Ans correctAnswer={correctAnswer}> </Ans></div>
            <Card.Body>
                <Card.Text>
                    <div className='row justify-content-center '>
                        {
                            options.map((option, index) => <Options
                                option={option}
                                handelOption={handelOption}
                                key={index}
                            ></Options>)
                        }
                    </div>
                </Card.Text>

            </Card.Body>

        </Card>
    );
}




export default Questions;