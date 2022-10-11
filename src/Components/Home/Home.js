import React from 'react';
import { useLoaderData } from 'react-router-dom';
import bg from '../../bg.png'

import Quiz from '../Quiz/Quiz';



const Home = () => {
    const qz = useLoaderData();
    const quiz = qz.data

    return (
        <div >
            <div className="d-lg-flex justify-content-between row m-5 ">
                <div className='col-lg-6 align-middle d-flex justify-content-center flex-column p-5'>
                    <h1 className="">It is a completely free web application. Anyone can easily participate in its madam quiz in this quick test app</h1>
                    <p className="py-6">Assessment, instruction, and practice that motivate every student to mastery</p>
                </div>
                <div className="col-lg-6  ">
                    <img src={bg} className="w-100 " alt="" />
                </div>

            </div>
            <Quiz quiz={quiz}></Quiz>




        </div>
    );
};

export default Home;