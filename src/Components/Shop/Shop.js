import { Container, Grid } from '@material-ui/core';
import React from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import "./Shop.css"
import ShopFilter from './ShopFilter/ShopFilter';
import ShopHeader from './ShopHeader/ShopHeader';
import ShopProducts from './ShopProducts/ShopProducts';

const Shop = () => {
    return (
        <div>
            <NavBar/>
            <ShopHeader/>
            <Container>
                <Grid container>
                   <ShopFilter/>
                   <ShopProducts/>
                </Grid>
            </Container>
            <Footer/>
        </div>
    );
};

export default Shop;