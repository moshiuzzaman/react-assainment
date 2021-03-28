
import { Container, Grid } from '@material-ui/core';
import React from 'react';
import Footer from '../Footer/Footer';

import NavBar from '../NavBar/NavBar';
import "./Cart.css"
import CartHeader from './CartHeader/CartHeader';
import CartItem from './CartItem/CartItems';
import CartSidebar from './CartSidebar/CartSidebar';

const Cart = () => {

    return (
        <>
            <NavBar />
            <CartHeader />
            <Container>
                <Grid container>
                    <CartItem />
                    <CartSidebar />
                </Grid>
            </Container>
            <Footer/>
        </>
    );
};

export default Cart;