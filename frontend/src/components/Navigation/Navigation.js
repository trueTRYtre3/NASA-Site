import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import './Navigation.css';

const Navigation = () => {
    
    return(
        <Navbar variant="dark" className="navbar">
            <Container>
                <Navbar.Brand href="#home" id='name'>Cosmos</Navbar.Brand>
                <Nav className="me-auto" id='categories'>
                    <Nav.Link href="#home" id='text'>Space</Nav.Link>
                    <Nav.Link href="#features" id='text'>Earth</Nav.Link>
                    <Nav.Link href="#pricing" id='text'>Mars</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigation;