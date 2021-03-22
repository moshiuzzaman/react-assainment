import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import LoginSingUp from '../Authentication/Authentication';

const NavBar = () => {
    const [state, setState] = useState('action')
    const [modalShow, setModalShow] =useState(false);
    return (
        <Container>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">MINI SHOP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="">Home</Nav.Link>
                        <Nav.Link onClick={() => setModalShow(true)}>Login</Nav.Link>
                        <NavDropdown title={state} id="basic-nav-dropdown">
                            <NavDropdown.Item href="/login" >Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" onClick={() => setState('aldgfo')}>Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <LoginSingUp
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </Navbar>
        </Container>

    );
};

export default NavBar;