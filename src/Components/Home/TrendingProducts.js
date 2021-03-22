import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../Store/Actions/ProductsAction';
import ProductDetails from './ProductDetails';

const TrendingProducts = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    }, [])
    const products = useSelector(state => state.products.products)
    const tenProducts = products.slice(0, 10)

    const [modalShow, setModalShow] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState()
    const openProductDetails = (product) => {
        setModalShow(true)
        setSelectedProduct(product)
    }
    return (
        <Container>
            <Row className="align-items-center mt-5">
                <Col md={6}>
                    <h1>Trending Products </h1>
                </Col>
                <Col md={6}>
                    <Button className="see-more" variant="light">More Products <IoIosArrowForward /></Button>
                </Col>
            </Row>
            <Row>
                {
                    tenProducts.map((pd,index) => 
                        <Col key={index} className="p-0 m-0" md={3}  >
                            <div className="singleProducts">
                                <img className="w-100" src="https://cartzilla.createx.studio/img/shop/catalog/58.jpg" alt="" />
                                <p className="product-category">{pd.category}</p>
                                <h3 className="product-title">{pd.title}</h3>
                                <p className="product-price">$ <span>{pd.price}</span></p>
                                <Button className='add-to-cart'>Add to cart</Button>
                                <button className="quick-view" onClick={() => openProductDetails(pd)}>Quick view</button>

                            </div>
                        </Col>
                    )
                }
            </Row>
            {/* <ProductDetails
                product={selectedProduct}
                show={modalShow}
                onHide={() => setModalShow(false)}
            /> */}
        </Container>
    );
};

export default TrendingProducts;