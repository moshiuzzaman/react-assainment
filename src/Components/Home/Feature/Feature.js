import { Button, Card, Grid } from '@material-ui/core';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import "./Feature.css"

const Feature = () => {
    return (
        <div>
            <Grid container>
                <Grid item md={12} sm={4} xs={12}>
                    <Card className="feature-card">
                        <Grid container alignItems="center" className="feture1">
                            <Grid item xs={5} className="featureImage">
                                <img className=" w-25" src="https://i.ibb.co/GkrDCMC/banner-sm01.png" alt="" />
                            </Grid>
                            <Grid item xs={7} className="featureDetails">
                                <h5>Next Gen <b>Video</b> With <b>360 Cam</b></h5>
                                <Button color="primary">Shop Now <MdKeyboardArrowRight/></Button>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item md={12} sm={4} xs={12}>
                    <Card className="feature-card">
                        <Grid container alignItems="center" className="feture2">
                            <Grid item xs={5} className="featureImage">
                                <img className=" w-25" src="https://cartzilla.createx.studio/img/home/banners/banner-sm02.png" alt="" />
                            </Grid>
                            <Grid item xs={7} className="featureDetails">
                                <h5>Top Rated <b>Gadgets</b> are On <b>Sale</b></h5>
                                <Button color="primary">Shop Now <MdKeyboardArrowRight/></Button>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item md={12} sm={4} xs={12}>
                    <Card className="feature-card">
                        <Grid container alignItems="center" className="feture3">
                            <Grid item xs={5} className="featureImage">
                                <img className=" w-25" src="https://cartzilla.createx.studio/img/home/banners/banner-sm03.png" alt="" />
                            </Grid>
                            <Grid item xs={7} className="featureDetails">
                            <h5>Catch Big <b>Deals</b> on <b>Earbuds</b></h5>
                                <Button color="primary">Shop Now <MdKeyboardArrowRight/></Button>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>




        </div>
    );
};

export default Feature;