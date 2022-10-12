import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand>
                        <Link className='text-decoration-none text-white' to='/'>
                            <h4><span className='text-warning'>Quick</span>Quiz</h4>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link>
                                <NavLink className='text-decoration-none me-4 text-white' to="/topics">Topics</NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink className='text-decoration-none me-4 text-white' to="/statistics">Statistics</NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink className='text-decoration-none me-4 text-white' to="/about">About Us</NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink className='text-decoration-none me-4 text-white' to="/contact">Contact Us</NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink className={`text-decoration-none me-4 text-white ${({ isActive }) => {
                                    return isActive ? "active" : undefined;
                                }}
`} to="/blogs">Blog</NavLink>
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;