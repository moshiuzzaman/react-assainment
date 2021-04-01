import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Grid } from '@material-ui/core';

const CartHeader = () => {
    return (
        <div className="cart-header py-5">
            <Container>
                <Grid container>
                    <Grid item xs={6}>
                        <h4 className=" text-light">Your cart</h4>
                    </Grid>
                    <Grid item xs={6}>
                        <p className="float-right text-light"> / Cart</p>
                        <Link to="/" className="float-right">Home {' '}</Link>
                    </Grid>
                </Grid>
                <Grid container className="mt-5">
                    <Grid item md={3} xs={6} >
                        <h6 className=" text-light">Products</h6>
                    </Grid>
                    <Grid item md={4} xs={6}>
                        <Link to="/">
                            <Button
                                className="float-right"
                                variant="outlined"
                                color="secondary"
                            >
                                Continue shopping
                         </Button>
                        </Link>
                    </Grid>
                    <Grid item md={6} ></Grid>
                </Grid>
            </Container>
        </div >
    );
};

export default CartHeader;