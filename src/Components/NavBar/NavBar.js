import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import jwt_decode from "jwt-decode";

import './Navbar.css'
import { logOutUser } from '../../Store/Actions/UsersAction';


const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);

const NavBar = () => {
    const cart = useSelector(state => state.cart.cart)
    let user = {
        role: ''
    }
    const token = sessionStorage.getItem("token")
    let decoded
    token === null ? decoded = {} : decoded = jwt_decode(token);
    const finalUser = { ...user, ...decoded }
    const dispatch=useDispatch()

    const handleLogOut = () => {
        sessionStorage.clear()
        dispatch(logOutUser())
        window.location.reload();
    }
    return (
        <div id="navbar">
            <Container className="">
                <Navbar expand="lg">
                    <Navbar.Brand href="#home">MINI SHOP</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav ">
                        <Nav className="ml-auto">
                            <Link to="/">Home</Link>
                            {
                                finalUser.role ?
                                    <>
                                        <Link to="/dashboard">Dashboard</Link>
                                        <Link to="/" onClick={handleLogOut}>LogOut</Link>
                                    </> :
                                    <Link to="/login">Login</Link>
                            }

                        </Nav>
                        <Link to="/cart">
                            <IconButton aria-label="cart">
                                <StyledBadge badgeContent={cart.length === 0 ? "0" : cart.length} color="secondary">
                                    <ShoppingCartIcon />
                                </StyledBadge>
                            </IconButton>
                        </Link>
                    </Navbar.Collapse>


                </Navbar>

            </Container>
        </div>

    );
};

export default NavBar;