import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchByName } from '../../Store/Actions/ShopAction';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import "./Shop.css"
import ShopFilter from './ShopFilter/ShopFilter';
import ShopHeader from './ShopHeader/ShopHeader';
import ShopProducts from './ShopProducts/ShopProducts';

const Shop = () => {
    const dispatch = useDispatch()

    const allProducts = useSelector(
        state => state.products.products
    )
    console.log(allProducts)
    const handleSearchByName = (e) => {
        dispatch(searchByName(e.target.value))
        console.log(allProducts)
    }
    return (
        <div>
            <NavBar />
            <ShopHeader />
            <Container>
                <Grid container>
                    <ShopFilter handleSearchByName={handleSearchByName} />
                    <ShopProducts allProducts={allProducts} />
                </Grid>
            </Container>
            <Footer />
        </div>
    );
};

export default Shop;