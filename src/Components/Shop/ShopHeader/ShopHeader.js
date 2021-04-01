import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Grid } from '@material-ui/core';

const ShopHeader = () => {
    return (
        <div className="cart-header py-5">
            <Container>
            <Grid container>
                <Grid item xs={6}>
                    <h4 className=" text-light">Shop Page</h4>
                </Grid>
                <Grid item xs={6}>
                    <p className="float-right text-light"> / Shop</p>
                    <Link to="/" className="float-right">Home {' '}</Link>
                </Grid>
            </Grid>
            <Grid container className="mt-5">
                <Grid item md={5} ></Grid>
                <Grid item md={3} xs={6} >
                    {/* <h6 className=" text-light"></h6> */}
                </Grid>
                <Grid item md={4}  xs={6}>
                    <Link to="/">
                        <Button className="float-right" variant="outlined" color="secondary">
                            Go Back
                         </Button>
                    </Link>
                </Grid>
                
            </Grid>
                </Container>
        </div >
    );
};

export default ShopHeader;