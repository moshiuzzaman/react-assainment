import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import Feature from '../Feature/Feature';
import Container from '@material-ui/core/Container';
import { Button, Grid } from '@material-ui/core';

const Header = () => {
    return (
        <div className="header">
            <Container>
                <Grid container spacing={3}  alignItems="center">
                    <Grid item  md={9} sm={12}>
                        <Grid container alignItems="center">
                            <Grid item md={6} sm={6}>
                                <h3>Check our huge</h3>
                                <h1>SMARTPHONES</h1>
                                <h4>& Accessories collection</h4>
                                <Button  variant="contained" color="secondary">Shop now <IoIosArrowForward /></Button>
                            </Grid>
                            <Grid item md={6} sm={6}>
                                <img className="header-image" src="https://i.ibb.co/jbcTsWY/06.jpg" alt="" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={3} sm={12}>
                        <Feature />
                    </Grid>
                </Grid>
            </Container>

        </div>
    );
};

export default Header;