import React from 'react';
import { useLoaderData } from 'react-router-dom';
import bg from '../../img/bg.png'

import Quiz from '../Quiz/Quiz';



const Home = () => {
    const qz = useLoaderData();
    const quiz = qz.data

    return (
        <div >
            <div className="d-lg-flex justify-content-between row m-5 ">
                <div className='col-lg-6 align-middle d-flex justify-content-center flex-column p-md-5'>
                    <h1 className="">Welcome Quick Test</h1>
                    <p className="py-6">It is a completely free web application. Anyone can easily participate in its madam quiz in this quick test app</p>
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