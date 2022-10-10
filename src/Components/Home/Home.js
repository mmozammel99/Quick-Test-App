import React from 'react';
import bg from '../../bg.png'
import Quizitem from '../Quizitem/Quizitem';

const Home = () => {
    return (
        <div >
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={bg} className="w-[60%]" alt="" />
   
    <div>
      <h1 className="text-5xl font-bold">We create live multiplier quizzes for you!</h1>
      <p className="py-6">Assessment, instruction, and practice that motivate every student to mastery</p>
     
    </div>
  </div>
</div>

<Quizitem></Quizitem>
        </div>
    );
};

export default Home;