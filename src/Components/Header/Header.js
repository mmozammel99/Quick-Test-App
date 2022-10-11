import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import img from '../../logo.png';


const Header = () => {
    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/"> <img src={img} alt="" /> Quick Test</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>

                    <Nav>
                        <Link className='text-light text-decoration-none me-5' to="/" >Home</Link>
                        <Link className='text-light text-decoration-none me-5' to="/statistics" >Statistics</Link>
                        <Link className='text-light text-decoration-none me-5' to="/blog" >Blog</Link>
                        <Link className='text-light text-decoration-none me-5' to="/about" >About us</Link>



                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    )
};

export default Header;