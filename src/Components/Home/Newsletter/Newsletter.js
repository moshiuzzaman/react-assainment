import { Button, Container, Grid } from '@material-ui/core';
import React from 'react';
import './Newsletter.css'
const Newsletter = () => {
    return (
        <div id='newsletter'>
            <Container>
                <Grid container justify="center">
                    <Grid item xs={12}>
                        <div align="center">
                            <h1 >Get your Products right now</h1>
                            <p>Be the first know our latest offers and updates!</p>
                        </div>
                    </Grid>

                    <Grid item md={6}>
                        <Grid container>
                            <Grid item md={9} xs={12}>
                                <input type="text" className="newsletterInput"  placeholder="Enter Your Email Address" />
                            </Grid>
                            <Grid item md={3} xs={12}>
                                <Button variant="contained" color="secondary" className="newsletter">Newsletter</Button>
                            </Grid>
                        </Grid>
                        
                    </Grid>
                </Grid>
            </Container>

        </div>

    );
};

export default Newsletter;