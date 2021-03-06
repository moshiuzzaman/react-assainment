import { Button, Container, Grid } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React, { useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../../Store/Actions/CartAction';
import { getPaginationProducts, getProducts } from '../../../Store/Actions/ProductsAction';
import './TrendingProducts.css'



const TrendingProducts = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
        dispatch(getPaginationProducts(1))
    }, [dispatch])


    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
        dispatch(getPaginationProducts(value))

    };
    const products = useSelector(
        state => state.products.products
    )
    const paginationProducts = useSelector(
        state => state.products.paginationProducts
    )
    const count = Math.ceil(products.length / 10) + 1
    let eightProducts = paginationProducts

    const handleNext = () => {
        page !== count && setPage(page + 1)
        page !== count && dispatch(getPaginationProducts(page + 1))
    }
const handlePrevious = () => {
        page !== 1 && setPage(page -1)
        page !== 1 && dispatch(getPaginationProducts(page - 1))
    }

    return (
        <Container className="trending-products-container">
            <Grid container id="shop" className="mb-4">
                <Grid item xs={6} >
                    <h4>Trending Products </h4>
                </Grid>
                <Grid item xs={6} >
                    <Button
                        onClick={() => handleNext()}
                        className="see-more mx-1"
                        variant="outlined"
                        color="secondary"
                        size="small">
                        Next
                         <FaArrowRight />
                    </Button> {' '}
                    <Button
                        onClick={() => handlePrevious()}
                        className="see-more mx-1"
                        variant="outlined"
                        color="secondary"
                        size="small">
                        <FaArrowLeft /> 
                         Previous
                    </Button>
                </Grid>
            </Grid>
            <Grid container>


                {
                    eightProducts.map((pd, index) =>
                        <Grid
                            item key={index}
                            className="p-0 m-0"
                            md={3}
                            sm={4}
                            xs={12}
                        >
                            <div className="singleProducts">
                                <div align="center" className="product-image ">
                                    <img
                                        src={pd.image}
                                        alt={"product Img"}
                                        width="100%"
                                    />
                                </div>
                                <p className="product-category">{pd.category}</p>
                                <h3 className="product-title">{pd.title}</h3>
                                <p className="product-price"><b>Price:</b> $<span>{pd.price}</span></p>
                                <Button
                                    color="secondary"
                                    variant="contained"
                                    className='full-width-button'
                                    onClick={() => dispatch(addToCart(pd))}>
                                    Add to cart
                                    </Button>
                                <Link
                                    to={`/product-view/${pd._id}`}>
                                    <button className="quick-view" >
                                        Quick view
                                    </button>
                                </Link>
                            </div>
                        </Grid>
                    )
                }

            </Grid>
            <Grid
                container
                justify="center"
                className="mt-5"
                alignItems="center">
                <Pagination
                    count={count}
                    page={page}
                    onChange={handleChange}
                    variant="outlined"
                    color="secondary"
                />
            </Grid>
        </Container >
    );
};

export default TrendingProducts;