import React from 'react';
import logo from '../../assets/logo.png';
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import boolean from "react-fast-marquee";
import './Header.css'


import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';





const Header = () => {
    let navigate=useNavigate()

    let handleAnotherPage=()=>{
        navigate("/login")
    }

    let user = useContext(AuthContext)

    return (
        <Container>
            <div className="text-center mt-4 topInfo">
                <img src={logo} alt="logo" />
                <p><small className='text-secondary'>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM d YYYY")}</p>
            </div>
            <div className="d-flex marquee">
                <Button variant="success me-4">Latest</Button>
                <Marquee className='text-danger' pauseOnClick={boolean}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            {/* top hading part complete  */}


            <Navbar className="mt-4" collapseOnSelect expand="lg" bg="light" variant="light">

                <Navbar.Brand href="#home">Programer-Boy</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">

                        <Nav.Link>
                            <Link to="/categoryData/1">Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/about">About</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/">Career</Link>
                        </Nav.Link>

                    </Nav>
                    <Nav>
                        {
                            user ? <div className='d-flex align-items-center'>
                                <i class="fa fa-user-circle-o icon_User" aria-hidden="true"></i>
                                <Button onClick={handleAnotherPage} variant="success me-4">Login</Button>
                            </div> :

                                <div className='d-flex align-items-center'>
                                    <p><small>Please Login....</small></p>
                                    <Button variant="success me-4">Login</Button>
                                </div>
                        }

                    </Nav>
                </Navbar.Collapse>

            </Navbar>

        </Container>
    );
};

export default Header;