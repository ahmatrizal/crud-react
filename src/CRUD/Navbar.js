import React from 'react'
import { Navbar, Form, FormControl, Button, Nav } from 'react-bootstrap'

const NavbarComponent = () => {
    return (
         <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">CRUD REACT JS</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
            
            </>       
    )
}

export default NavbarComponent
