import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

function TopBar(){
    return(
        <Navbar bg="light" expand="lg" >
        <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home">
            <img src="[Instacart logo src]" alt="instacart logo" /> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="mr-auto">
            </Nav>
            <Nav>
                <Nav.Link href="#login">Log in</Nav.Link>
                <Button variant="success"> Sign up </Button>{' '}
            </Nav>
            
        
        </Navbar.Collapse>
    </Navbar>
    
    )
};
export default TopBar