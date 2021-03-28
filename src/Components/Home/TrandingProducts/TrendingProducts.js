import { Button, Container, Grid } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React, { useEffect } from 'react';
import { IoIosArrowForward } from "react-icons/io";
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
    const products = useSelector(state => state.products.products)
    const paginationProducts = useSelector(state => state.products.paginationProducts)
    const count = Math.ceil(products.length / 10) + 1
    let eightProducts = paginationProducts

    return (
        <Container className="trending-products-container">
            <Grid container>
                <Grid item xs={6} >
                    <h4>Trending Products </h4>
                </Grid>
                <Grid item xs={6} >
                    <Button
                        className="see-more"
                        variant="outlined"
                        size="small">
                        More Products
                        <IoIosArrowForward />
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
                                <p className="product-price">$ <span>{pd.price}</span></p>
                                <Button
                                    color="secondary"
                                    variant="contained"
                                    className='add-to-cart'
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