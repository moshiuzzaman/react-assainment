import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { IoIosArrowForward } from "react-icons/io";
import Feature from './Feature';

const Header = () => {
    return (
        <div className="header">
            <Container>
                <Row className="mt-4 align-items-center">
                    <Col md={9}>
                        <Row className=" align-items-center">
                            <Col md={6}>
                                <h3>Check our huge</h3>
                                <h1>SMARTPHONES</h1>
                                <h4>& Accessories collection</h4>
                                <Button variant="info">Shop now <IoIosArrowForward /></Button>
                            </Col>
                            <Col md={6}>
                                <img className="header-image" src="https://i.ibb.co/jbcTsWY/06.jpg" alt="" />
                            </Col>
                        </Row>
                    </Col>
                    <Col md={3}>
                       <Feature/>
                    </Col>

                </Row>
            </Container>

        </div>
    );
};

export default Header;