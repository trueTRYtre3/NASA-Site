import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap'
import rocket from '../../images/rocket.png'
import './Navigation.css';

const Navigation = () => {
    
    return(
        <>
            <Navbar collapseOnSelect expand='md' variant="dark" className="navbar">
                <Container>
                    <Navbar.Brand href="#home" id='name'>
                        <img
                            alt=""
                            src={rocket}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        Cosmos
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav  className="me-auto"></Nav>
                        <Nav id='categories'>
                            <Nav.Link as={Link} to='/' id='text'>Space</Nav.Link>
                            <Nav.Link as={Link} to='/mars' id='text'>Mars</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation;