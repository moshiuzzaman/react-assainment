import React from 'react';
import './Footer.css'
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { ImGooglePlus } from 'react-icons/im';
import { Box, Button, Container, Grid, Link, Typography } from '@material-ui/core';

const Footer = () => {
    return (
        <div className='footer-section mt-5'>
            <Container >
                <Grid container>
                    <Grid item className='m-0 p-0' md={3}>
                        <ul>
                            <p className='section-name' ><strong>Useful link</strong></p>
                            <li>Emergency Dental Care</li>
                            <li>Yards</li>
                            <li>Check Up</li>
                            <li>Treatment of Personal Diseases</li>
                            <li>Check Up</li>
                        </ul>
                    </Grid>
                    <Grid item className='m-0 p-0' md={3}>
                        <ul>
                            <p className='section-name'><strong>Service</strong></p>
                            <li>Emergency Dental Care</li>
                            <li>Yards</li>
                            <li>Check Up</li>
                            <li>Treatment of Personal Diseases</li>
                            <li>Check Up</li>
                            <li>Check Up</li>
                            <li>Check Up</li>
                        </ul>
                    </Grid>
                    <Grid item className='m-0 p-0' md={3}>
                        <ul>
                            <p className='section-name' ><strong>Oral Health</strong></p>
                            <li>Emergency Dental Care</li>
                            <li>Yards</li>
                            <li>Check Up</li>
                            <li>Treatment of Personal Diseases</li>
                            <li>Check Up</li>
                            <li>Check Up</li>
                            <li>Check Up</li>
                        </ul>
                    </Grid>
                    <Grid item md={3}>
                        <p className='section-name' ><strong>Our adress</strong></p>
                        <p>New York-101010 hedson <br /> Yeark</p>
                        <div className='mt-2'>
                            <FaFacebookF className='footerIcons' />
                            <ImGooglePlus className='footerIcons' />
                            <FaTwitter className='footerIcons' />
                        </div>
                        <h5 className='mt-5'>Call Now</h5>
                        <Button> +25421554</Button>
                    </Grid>
                </Grid>
                <Box pt={4} className="pb-4">
                    <Typography variant="body2" color="textSecondary" align="center">
                        {'Copyright © '}
                        <Link color="inherit" href="https://material-ui.com/">
                            Your Website
                        </Link>{' '}
                        {new Date().getFullYear()}
                        {'.'}
                    </Typography>
                </Box>
            </Container>
        </div>
    );
};

export default Footer;