import React from 'react';

import img from '../../images/color.steps.jpg'
import logo from '../../images/1d3551c08f18c519d1bd4a1b86b96318.png'
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar className='flex-column'>
            {/* cover image  */}
            <Nav className='w-100 d-flex justify-content-center border-bottom border-3 '>
                <img src={img} height='250px' className='w-100' alt="" />
            </Nav>

            {/* logo and title  */}
            <Nav className='w-100 d-flex align-items-center justify-content-between p-3'>
                <Nav className="d-flex align-items-center">
                    <img width="100px" className='rounded-circle me-5' src={logo} alt="" />
                    <h1 className='text-white'>Dance Steps</h1>
                </Nav>

                {/* all tabs  */}
                <Nav>
                    <NavLink to='/home' className="bg-primary px-4 py-2 text-decoration-none fs-5 text-light rounded mx-3">Home</NavLink>
                    <NavLink to='/classes' className="bg-primary px-4 py-2 text-decoration-none fs-5 text-light rounded mx-3">Classes</NavLink>
                    <NavLink to='/services' className="bg-primary px-4 py-2 text-decoration-none fs-5 text-light rounded mx-3">Services</NavLink>
                    <NavLink to='/about' className="bg-primary px-4 py-2 text-decoration-none fs-5 text-light rounded mx-3">About</NavLink>
                </Nav>

            </Nav>


        </Navbar>
    );
};

export default Header;