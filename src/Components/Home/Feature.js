import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Feature = () => {
    return (
        <div>
            <Row>
                <Col md={12}  className="d-flex align-items-center header-features bg-info m-2">
                    <img className=" w-25" src="https://i.ibb.co/GkrDCMC/banner-sm01.png" alt=""/>
                    <h4>Next Gen <b>Video</b> With <b>360 Cam</b></h4>
                </Col>
                 <Col md={12}  className="d-flex align-items-center header-features bg-success m-2">
                    <img className=" w-25" src="https://i.ibb.co/GkrDCMC/banner-sm01.png" alt=""/>
                    <h4>Next Gen <b>Video</b> With <b>360 Cam</b></h4>
                </Col>
                 <Col md={12}  className="d-flex align-items-center header-features bg-warning m-2">
                    <img className=" w-25" src="https://i.ibb.co/GkrDCMC/banner-sm01.png" alt=""/>
                    <h4>Next Gen <b>Video</b> With <b>360 Cam</b></h4>
                </Col>
                
            </Row>
        </div>
    );
};

export default Feature;