import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import logo from '../../logo.png'
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const [open, setOpen] = useState(false);
    return (

        <nav >
            <div className="navbar bg-base-100 drop-shadow">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case font-bold text-2xl" href='/home'><img className='mr-1 w-8' src={logo} alt="" />Quiz Time</a>
                </div>
                <div onClick={() => setOpen(!open)} className="md:hidden">
                    {
                        open ? <FontAwesomeIcon className='text-3xl' icon={faXmark} /> : <FontAwesomeIcon className='text-3xl' icon={faBars} />
                    }
                </div>
                <div className='flex  justify-center'>
                   <div className='h-52 flex-col '>
                   <Link className='mx-5 font-semibold'  to="/">Home</Link>
                    <Link className='mx-5 font-semibold'  to='quiz'>Quiz</Link>
                    <Link className='mx-5 font-semibold' to='statistics'>Statistics</Link>
                    <Link className='mx-5 font-semibold' to='blog'>Blog</Link>
                   </div>

                </div>
            </div>
        </nav>

    );
};

export default Header;