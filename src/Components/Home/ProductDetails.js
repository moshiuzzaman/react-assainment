
import React, { useState } from 'react';
import { Col, Modal, Row } from 'react-bootstrap';

const ProductDetails = (props) => {
  console.log(props)
 const product=props.product
 console.log(product)
  return (
    <Modal
      {...props}
      size="lg"
      centered
      animation={false}
    >
      <Modal.Header closeButton>
        <h3>{product.category} &gt; </h3>
      </Modal.Header>
      <Modal.Body className="model-body">
       <Row>
           <Col md={6}>
           <img className="w-100" src="https://cartzilla.createx.studio/img/shop/single/gallery/05.jpg" alt="" />
           </Col>
           <Col md={6}>
               
           </Col>
       </Row>
        
      </Modal.Body>

    </Modal>
  );
};

export default ProductDetails;