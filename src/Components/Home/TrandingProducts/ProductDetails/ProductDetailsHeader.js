
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Grid } from '@material-ui/core';

const ProductDetailsHeader = ({product}) => {
    return (
        <div className="product-details-header ">
            <Container>
            <Grid container>
                <Grid item xs={6}>
                    <h4 className=" text-light">{product.title}</h4>
                </Grid>
                <Grid item xs={6}>
                    <p className="float-right text-light"> / product Details</p>
                    <Link to="/" className="float-right">Home {' '}</Link>
                </Grid>
            </Grid>
            <Grid container className="mt-5">
                <Grid item  xs={6} >
                    <h6 className=" text-light">Product Details</h6>
                </Grid>
                <Grid item xs={6}>
                    <Link to="/">
                        <Button className="float-right" variant="outlined" color="secondary">
                            Continue shopping
                         </Button>
                    </Link>
                </Grid>
               
            </Grid>
                </Container>
        </div >
    );
};

export default ProductDetailsHeader;