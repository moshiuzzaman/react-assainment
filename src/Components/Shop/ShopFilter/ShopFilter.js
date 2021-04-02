import { Accordion, AccordionDetails, AccordionSummary, Button, Grid, Paper } from '@material-ui/core';
import React, { useState } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const ShopFilter = ({handleSearchByName}) => {
    const [expanded, setExpanded] =useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    return (
        <Grid item md={4} xs={12} >
            <Paper >
                <div className="sidebar">
                    <h5><b>Search By Name</b></h5>
                    <input onChange={handleSearchByName} type="text" name="" id="" />
                    <Button variant="contained" color="secondary" className="full-width-button">Search </Button>
                    <h5 className="my-4"><b>Search By Category</b></h5>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            Category
                        </AccordionSummary>
                        <AccordionDetails>
                        <ul className="sidebar-Ul">
                              <li className="sidebar-li">Cloths</li>
                              <li className="sidebar-li">Watchs</li>
                              <li className="sidebar-li">Sunglasses</li>
                              <li className="sidebar-li">Book</li>
                          </ul>
                        </AccordionDetails>
                    </Accordion>
                    <h5 className="my-4"><b>Search By Size</b></h5>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                        >
                            Size
                        </AccordionSummary>
                        <AccordionDetails>
                          <ul className="sidebar-Ul">
                              <li className="sidebar-li">XS</li>
                              <li className="sidebar-li">S</li>
                              <li className="sidebar-li">M</li>
                              <li className="sidebar-li">L</li>
                              <li className="sidebar-li">XL</li>
                          </ul>
                        </AccordionDetails>
                    </Accordion>
                  
                    <h5 className="my-4"><b>Search By Color</b></h5>
                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                        >
                            Color
                        </AccordionSummary>
                        <AccordionDetails>
                        <ul className="sidebar-Ul">
                              <li className="sidebar-li">red</li>
                              <li className="sidebar-li">Yellow</li>
                              <li className="sidebar-li">Black</li>
                              <li className="sidebar-li">Blue</li>
                              <li className="sidebar-li">All</li>
                          </ul>
                        </AccordionDetails>
                    </Accordion>

                </div>
            </Paper>
        </Grid>
    );
};

export default ShopFilter;


